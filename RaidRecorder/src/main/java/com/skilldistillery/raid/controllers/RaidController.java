package com.skilldistillery.raid.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.raid.entities.Raid;
import com.skilldistillery.raid.services.RaidServiceImpl;

@RequestMapping("api")
@RestController
public class RaidController {

	@Autowired
	private RaidServiceImpl svc;
	
	@GetMapping("ping")
	public String ping() {
		return "pong!";
	}
	
	@GetMapping("index")
	public List<Raid> getAllRaids(){
		return svc.getAllRaids();
	}
	
	@GetMapping("index/{id}")
	public Raid findRaidById(@PathVariable Integer id){
		return svc.findRaidById(id);
	}
	
	@PostMapping("create")
	public Raid create(@RequestBody Raid newRaid) {
		return svc.create(newRaid);
	}
	
	@DeleteMapping("delete/{id}")
	public void delete(@PathVariable Integer id) {
		svc.delete(id);
	}
	
	@PutMapping("update/{id}")
	public Raid update(@PathVariable int id,@RequestBody Raid upRaid) {
		return svc.update(id, upRaid);
	}
}
