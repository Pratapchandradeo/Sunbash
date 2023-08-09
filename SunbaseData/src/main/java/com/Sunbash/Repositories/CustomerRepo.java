package com.Sunbash.Repositories;

import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;

import com.Sunbash.Moduls.Customer;

public interface CustomerRepo extends JpaRepository<Customer, UUID> {

}
