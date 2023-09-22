package com.example.demo.controller;

import java.io.IOException;
import java.io.PrintStream;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.RequestEntity.BodyBuilder;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import java.util.zip.Deflater;
import java.util.zip.Inflater;
import com.example.demo.admin.imageModel;
import com.example.demo.admin.admin;
import com.example.demo.repository.ItemAddRepository;
@CrossOrigin("*") 
@RestController
@RequestMapping("/adminItems")

public class itemController {
	@Autowired
	ItemAddRepository itemRepo;

	@PostMapping(value={"/items"},consumes= {MediaType.MULTIPART_FORM_DATA_VALUE})
	public admin AddNewItems(@RequestPart("Admin") admin Admin,@RequestPart("imageFile")MultipartFile[] file) {
	
//	return itemRepo.save(Admin);
		try {
			Set<imageModel>images= uploadImage(file);
			Admin.setItemImages(images);
			return itemRepo.save(Admin);
		}catch(Exception e) {
			System.out.println(e.getMessage());
			return null;
		}
	
	}
	//process img
	public Set<imageModel> uploadImage(MultipartFile[] multipartFiles )throws IOException {
		Set<imageModel>imageModels=new HashSet<>();
		for(MultipartFile file:multipartFiles) {
			imageModel ImageModel=new imageModel(
					file.getOriginalFilename(),
					file.getContentType(),
					file.getBytes()
					);
			imageModels.add(ImageModel);
			
		}
		return imageModels;
	}
	
	@GetMapping("/items")
	
	public ResponseEntity<List<admin>>getAllItems(){
		List<admin>itemList=new ArrayList<>();
		itemRepo.findAll().forEach(itemList::add);
		
		return new ResponseEntity<List<admin>>(itemList,HttpStatus.OK);
		
	}
	
	//get item by id
	@GetMapping("/items/{id}")

	public ResponseEntity<admin> getEmployeeById(@PathVariable long id){
		admin Admin=itemRepo.findById(id)
				.orElseThrow();
		return ResponseEntity.ok(Admin);

	}
	

	@PutMapping("/items/{id}")
	public ResponseEntity<admin>updateItems(@PathVariable long id,@RequestBody admin AdminDetails)
	{
		admin Admin=itemRepo.findById(id)
		.orElseThrow();
		Admin.setItem_name(AdminDetails.getItem_name());
		Admin.setItem_category(AdminDetails.getItem_category());
		Admin.setItem_price(AdminDetails.getItem_price());
		Admin.setItem_description(AdminDetails.getItem_description());
		
		admin updatedItems=itemRepo.save(Admin);
		return ResponseEntity.ok(updatedItems);
		
	}
	
	//delete
	@DeleteMapping("/items/{id}")
	public ResponseEntity<Map<String,Boolean>>deleteItems(@PathVariable Long id){
		admin Admin=itemRepo.findById(id).orElseThrow();
		itemRepo.delete(Admin);
		Map<String,Boolean>response=new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}
	
	
	
	

	
	

}
