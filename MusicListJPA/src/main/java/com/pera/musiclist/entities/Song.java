package com.skilldistillery.raid.entities;

import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Raid {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;

	private String name;
	
	@Column(name="Time_Started")
	private LocalDateTime timeStarted;
	
	@Column(name="Time_Ended")
	private LocalDateTime timeEnded;
	
	@Column(name="number_of_attendees")
	private int numberOfAttendees;
	
	@Column(name="number_of_tanks")
	private int numberOfTanks;
	
	@Column(name="number_of_healers")
	private int numberOfHealers;
	
	@Column(name="number_of_dps")
	private int numberOfDps;
	
	@Column(name="number_bosses_killed")
	private int numberBossesKilled;
	
	@Column(name="best_item_dropped")
	private String bestItemDropped;
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public LocalDateTime getTimeStarted() {
		return timeStarted;
	}
	public void setTimeStarted(LocalDateTime timeStarted) {
		this.timeStarted = timeStarted;
	}
	public LocalDateTime getTimeEnded() {
		return timeEnded;
	}
	public void setTimeEnded(LocalDateTime timeEnded) {
		this.timeEnded = timeEnded;
	}
	public int getNumberOfAttendees() {
		return numberOfAttendees;
	}
	public void setNumberOfAttendees(int numberOfAttendees) {
		this.numberOfAttendees = numberOfAttendees;
	}
	public int getNumberOfTanks() {
		return numberOfTanks;
	}
	public void setNumberOfTanks(int numberOfTanks) {
		this.numberOfTanks = numberOfTanks;
	}
	public int getNumberOfHealers() {
		return numberOfHealers;
	}
	public void setNumberOfHealers(int numberOfHealers) {
		this.numberOfHealers = numberOfHealers;
	}
	public int getNumberOfDps() {
		return numberOfDps;
	}
	public void setNumberOfDps(int numberOfDps) {
		this.numberOfDps = numberOfDps;
	}
	public int getNumberBossesKilled() {
		return numberBossesKilled;
	}
	public void setNumberBossesKilled(int numberBossesKilled) {
		this.numberBossesKilled = numberBossesKilled;
	}
	public String getBestItemDropped() {
		return bestItemDropped;
	}
	public void setBestItemDropped(String bestItemDropped) {
		this.bestItemDropped = bestItemDropped;
	}
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + id;
		return result;
	}
	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Raid other = (Raid) obj;
		if (id != other.id)
			return false;
		return true;
	}
	@Override
	public String toString() {
		return "Raid [id=" + id + ", name=" + name + ", timeStarted=" + timeStarted + ", timeEnded=" + timeEnded
				+ ", numberOfAttendees=" + numberOfAttendees + ", numberOfTanks=" + numberOfTanks + ", numberOfHealers="
				+ numberOfHealers + ", numberOfDps=" + numberOfDps + ", numberBossesKilled=" + numberBossesKilled
				+ ", bestItemDropped=" + bestItemDropped + "]";
	}
	public Raid(int id, String name, LocalDateTime timeStarted, LocalDateTime timeEnded, int numberOfAttendees,
			int numberOfTanks, int numberOfHealers, int numberOfDps, int numberBossesKilled, String bestItemDropped) {
		super();
		this.id = id;
		this.name = name;
		this.timeStarted = timeStarted;
		this.timeEnded = timeEnded;
		this.numberOfAttendees = numberOfAttendees;
		this.numberOfTanks = numberOfTanks;
		this.numberOfHealers = numberOfHealers;
		this.numberOfDps = numberOfDps;
		this.numberBossesKilled = numberBossesKilled;
		this.bestItemDropped = bestItemDropped;
	}
	public Raid() {
		super();
	}


}
