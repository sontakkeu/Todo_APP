package com.example.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.entity.Todo;

@Repository
public interface TodoRepository extends JpaRepository<Todo, Integer>{

}
