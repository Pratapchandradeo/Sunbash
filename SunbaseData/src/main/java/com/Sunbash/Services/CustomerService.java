package com.Sunbash.Services;

import java.util.List;
import java.util.UUID;

import com.Sunbash.ExceptionHandler.BodyNotFoundException;
import com.Sunbash.PlayLoad.CustomerDto;


public interface CustomerService {

	CustomerDto createCustomer(CustomerDto customer) throws BodyNotFoundException;
	CustomerDto updateCustomer(UUID id, CustomerDto customer);
	void deleteCustomer(UUID id);
	
	CustomerDto getById(UUID id);
	
	List<CustomerDto> getAllCustomer();
}
