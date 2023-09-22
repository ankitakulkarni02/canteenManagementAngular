package com.example.demo.admin;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="image_model")
public class imageModel {
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private Long id;
	private String image_name;
	private String image_type;
	@Column(length=50000000)
	private byte[] picByte;
	
	public imageModel() {
		
	}

	public imageModel(String image_name, String image_type, byte[] picByte) {
		super();
		this.image_name = image_name;
		this.image_type = image_type;
		this.picByte = picByte;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getImage_name() {
		return image_name;
	}

	public void setImage_name(String image_name) {
		this.image_name = image_name;
	}

	public String getImage_type() {
		return image_type;
	}

	public void setImage_type(String image_type) {
		this.image_type = image_type;
	}

	public byte[] getPicByte() {
		return picByte;
	}

	public void setPicByte(byte[] picByte) {
		this.picByte = picByte;
	}
	
	
}
