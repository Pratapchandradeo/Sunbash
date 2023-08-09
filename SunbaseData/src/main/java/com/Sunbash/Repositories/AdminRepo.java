package com.Sunbash.Repositories;

import java.util.List;
import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;

import com.Sunbash.Moduls.Admin;

public interface AdminRepo extends JpaRepository<Admin, UUID> {

	Admin findByLoginId(String login_id);
}
