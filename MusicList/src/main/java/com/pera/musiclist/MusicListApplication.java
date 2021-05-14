package com.skilldistillery.raid;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;

@SpringBootApplication
public class RaidRecorderApplication extends SpringBootServletInitializer {

	  @Override
	  protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {
	    return application.sources(RaidRecorderApplication.class);
	  }

	public static void main(String[] args) {
		SpringApplication.run(RaidRecorderApplication.class, args);
	}

}
