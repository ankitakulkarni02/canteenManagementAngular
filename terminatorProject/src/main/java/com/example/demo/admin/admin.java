package com.example.demo.admin;

import java.sql.Date;
import java.util.Set;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.Table;
import jakarta.persistence.Transient;
import jakarta.persistence.JoinColumn;
@Entity
@Table(name="ItemTable")
public class admin {


	@jakarta.persistence.Id
	@jakarta.persistence.GeneratedValue(strategy= jakarta.persistence.GenerationType.IDENTITY)
	private Long item_id;
	
	
	@jakarta.persistence.Column(name="item_name")
	private String item_name;
	
	@jakarta.persistence.Column(name="item_Category")
	private String item_category;
	
	@jakarta.persistence.Column(name="item_description",length=2000)
	private String item_description;
	@jakarta.persistence.Column(name="item_price")
	private String item_price;
	

	@Column(name="datePost")
	
  private Date datePost = new Date(System.currentTimeMillis());

@ManyToMany(fetch=FetchType.EAGER,cascade=CascadeType.ALL)
@JoinTable(name="item_images",joinColumns= {
		@JoinColumn(name="itemId")
},inverseJoinColumns= {
		
				@JoinColumn(name="imageId")	
		
}
)
	private Set<imageModel> itemImages;




	 
	public Set<imageModel> getItemImages() {
	return itemImages;
}
//public void setItemImages(Set<imageModel> itemImages) {
//	this.itemImages = itemImages;
//}
	public Long getItem_id() {
		return item_id;
	}
	public void setItem_id(Long item_id) {
		this.item_id = item_id;
	}

  public admin(Long item_id,String item_name,String item_category,String item_description,String item_price) {
	this.item_id=item_id;
	this.item_name=item_name;
	this.item_category=item_category;
	this.item_description=item_description;
	this.item_price=item_price;

}
  public admin(){}

public String getItem_name() {
	return item_name;
}

public void setItem_name(String item_name) {
	this.item_name = item_name;
}

public String getItem_category() {
	return item_category;
}

public void setItem_category(String item_category) {
	this.item_category = item_category;
}

public String getItem_description() {
	return item_description;
}

public void setItem_description(String item_description) {
	this.item_description = item_description;
}

public String getItem_price() {
	return item_price;
}

public void setItem_price(String item_price) {
	this.item_price = item_price;
}

public Date getDatePost() {
	return datePost;
}

public void setDatePost(Date datePost) {
	this.datePost = datePost;
}
//public void setItemImages(Set<imageModel> images) {
//	// TODO Auto-generated method stub
//	
//	this.itemImages = itemImages;
//}
public void setItemImages(Set<imageModel> itemImages) {
	this.itemImages = itemImages;
}
	
}
