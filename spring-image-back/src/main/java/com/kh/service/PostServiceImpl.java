package com.kh.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import com.kh.dto.Post;
import com.kh.mapper.PostMapper;

@Service
public class PostServiceImpl implements PostService{
	
	@Autowired
	private PostMapper postMapper;
	
	//import org.springframework.beans.factory.annotation.Value;
	@Value("${file.upload-dir}") //application.properties에서 설정 이름 가져와
	private String uploadDir; 
	//private String uploadDir = "C:/Users/user1/Desktop/saveImage";
	//file.upload-dir=C:/Users/user1/Desktop/saveImage 경로 넣어서 사용
	
	
	@Override
	public List<Post> findAll() {
		return postMapper.findAll();
	}
	
	
	@Override
	public void insertPost(Post post) {
		postMapper.insertPost(post);	
	}
	
	
}
