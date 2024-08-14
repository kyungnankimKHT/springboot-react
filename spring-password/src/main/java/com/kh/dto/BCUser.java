package com.kh.dto;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity //mysql 매핑
public class BCUser {
	
	@Id // primary key
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private String id;
	private String username;
	private String email;
	private String password;
}
