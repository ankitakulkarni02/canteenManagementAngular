package com.example.demo.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.admin.admin;

@Repository
public interface ItemAddRepository extends JpaRepository<admin,Long>{
	
}
