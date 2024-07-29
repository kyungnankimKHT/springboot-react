package com.kh.controller;


import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

@RestController
@RequestMapping("/api")
public class OAuthController {

    @Value("${naver.client-id}")
    private String clientId;

    @Value("${naver.client-secret}")
    private String clientSecret;

    @Value("${naver.redirect-uri}")
    private String redirectUri;

    @Value("${naver.state}")
    private String state;

    @GetMapping("/naverlogin")
    public String naverLogin() {
        String apiURL = "https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=" + clientId + "&redirect_uri=" + redirectUri + "&state=" + state;
        return "<a href='" + apiURL + "'><img height='50' src='http://static.nid.naver.com/oauth/small_g_in.PNG'/></a>";
    }

    @GetMapping("/callback")
    public String callback(@RequestParam String code, @RequestParam String state) {
        String apiURL = "https://nid.naver.com/oauth2.0/token?grant_type=authorization_code&client_id=" + clientId + "&client_secret=" + clientSecret + "&redirect_uri=" + redirectUri + "&code=" + code + "&state=" + state;

        RestTemplate restTemplate = new RestTemplate();
        String response = restTemplate.getForObject(apiURL, String.class);
        return response;
    }
}