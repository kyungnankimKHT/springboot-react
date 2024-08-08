package com.kh.dto;

import java.time.LocalDateTime;

import lombok.*;


@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class UserProfile {
	private    int userId; 		     // user_id 		  INT AUTO_INCREMENT PRIMARY KEY,
	private String username; 	     // username 		  VARCHAR(255) NOT NULL,
	private String profileImageUrl;  // profile_image_url VARCHAR(255),
	private LocalDateTime createdAt; // created_at        DATETIME DEFAULT CURRENT_TIMESTAMP
	// Local맛집 = 현재현지맛집
	// Localhost = 현재내주소
	// LocalDateTime = 현재 날짜와시간
}
