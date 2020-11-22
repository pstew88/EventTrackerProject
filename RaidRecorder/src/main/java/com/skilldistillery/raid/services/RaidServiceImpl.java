package com.skilldistillery.raid.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skilldistillery.raid.entities.Raid;
import com.skilldistillery.raid.repositories.RaidRepository;

@Service
public class RaidServiceImpl implements RaidService {

	@Autowired
	private RaidRepository raid;

	public List<Raid> getAllRaids() {
		return raid.findAll();
	}

	public Raid findRaidById(Integer id) {
		Optional<Raid> managedRaid = raid.findById(id);
		return managedRaid.get();
	}

	public Raid create(Raid newRaid) {
		raid.saveAndFlush(newRaid);
		return newRaid;
	}

	public void delete(Integer id) {
		Optional<Raid> raidOpt = raid.findById(id);
		Raid managedRaid = null;
		if (raidOpt.isPresent()) {
			managedRaid = raidOpt.get();
			raid.deleteById(managedRaid.getId());
			}
	}

	public Raid update(Integer id, Raid upRaid) {
		Optional<Raid> raidOpt = raid.findById(id);
		Raid managedRaid = null;
		if (raidOpt.isPresent()) {
			managedRaid = raidOpt.get();

			managedRaid.setName(upRaid.getName());
			managedRaid.setBestItemDropped(upRaid.getBestItemDropped());
			managedRaid.setNumberBossesKilled(upRaid.getNumberBossesKilled());
			managedRaid.setNumberOfAttendees(upRaid.getNumberOfAttendees());
			managedRaid.setNumberOfDps(upRaid.getNumberOfDps());
			managedRaid.setNumberOfHealers(upRaid.getNumberOfHealers());
			managedRaid.setNumberOfTanks(upRaid.getNumberOfHealers());
			managedRaid.setTimeStarted(upRaid.getTimeStarted());
			managedRaid.setTimeEnded(upRaid.getTimeEnded());
		}
		raid.saveAndFlush(managedRaid);
		return managedRaid;

	}

//	 List<Raid> search(String keyword);
}
