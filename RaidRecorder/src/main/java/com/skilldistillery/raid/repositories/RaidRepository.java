package com.skilldistillery.raid.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.raid.entities.Raid;

public interface RaidRepository extends JpaRepository<Raid, Integer> {

//	List<Raid> findPostByNameLikeOrLike(String name, String title);
	
}
