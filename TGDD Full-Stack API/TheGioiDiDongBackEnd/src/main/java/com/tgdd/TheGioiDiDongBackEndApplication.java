package com.tgdd;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;	
@SpringBootApplication
public class TheGioiDiDongBackEndApplication extends SpringBootServletInitializer{

	public static void main(String[] args) {
		SpringApplication.run(TheGioiDiDongBackEndApplication.class, args);
	}
	@Override
	protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {
		return application.sources(TheGioiDiDongBackEndApplication.class);
	}
}