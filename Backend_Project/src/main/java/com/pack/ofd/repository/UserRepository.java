package com.pack.ofd.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.pack.ofd.model.User;

public interface UserRepository extends JpaRepository<User,Integer> {

	List<User> findByEmailAndPassword(String email, String password);

}
