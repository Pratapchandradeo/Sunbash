package com.Sunbash;

import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import com.Sunbash.Moduls.Admin;
import com.Sunbash.Repositories.AdminRepo;

@SpringBootApplication
public class SunbaseDataApplication implements CommandLineRunner {
	
	
	@Autowired
	private BCryptPasswordEncoder bCryptPasswordEncoder;
	@Autowired
	private AdminRepo adminRepo;

	public static void main(String[] args) {
		SpringApplication.run(SunbaseDataApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
//		try {
//			Admin admin = new Admin();
//			
//			admin.setId(UUID.randomUUID());
//			admin.setLoginId("test@sunbasedata.com");
//			admin.setPassword(this.bCryptPasswordEncoder.encode("Test@123"));
//			admin.setRole("ADMIN");
//			Admin save = this.adminRepo.save(admin);
//			System.out.println(save);
//			
//		} catch (Exception e) {
//			e.getStackTrace();
//		}
//		
	}

}
