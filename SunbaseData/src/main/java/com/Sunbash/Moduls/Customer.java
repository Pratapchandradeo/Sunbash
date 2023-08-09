package com.Sunbash.Moduls;

import java.util.UUID;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class Customer {
	
	@Id
	@GeneratedValue
	private UUID id;
	
	private String first_name;
	private String last_name;
	private String street;
	private String address;
	private String city;
	private String state;
	private String email;
	private String phone;

}
