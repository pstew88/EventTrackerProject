import { RaidService } from './../../services/raid.service';
import { Raid } from './../../models/raid';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-raid',
  templateUrl: './raid.component.html',
  styleUrls: ['./raid.component.css'],
})
export class RaidComponent implements OnInit {
  raids: Raid[] = [];
  selected: Raid = null;
  newRaid: Raid = new Raid();
  editRaid: Raid = null;
  averageAttendees: number;

  constructor(private raidService: RaidService) {}

  ngOnInit(): void {
    this.loadRaid();
  }

  index() {
    this.raidService.index().subscribe(
      (good) => {
        this.raids = good;
      },
      (bad) => {
        console.error(bad);
      }
    );
  }

  setAverageAttendees(raids: Raid[]) {
    let result = null;
    let total = 0;
    for (let i = 0; i < raids.length; i++) {
      total = total + raids[i].numberOfAttendees;
    }
    result = total / raids.length;
    this.averageAttendees = result;
    console.log(result);
  }

  updateRaid(raid: Raid) {
    this.raidService.update(raid).subscribe(
      (good) => {
        this.index();
        if (this.selected != null) {
          this.selected = Object.assign({}, raid);
        }
      },
      (bad) => {
        console.error(bad);
      }
    );
    this.editRaid = null;
  }

  setEditRaid() {
    this.editRaid = Object.assign({}, this.selected);
  }

  loadRaid(): void {
    this.raidService.index().subscribe(
      (data) => {
        this.raids = data;
        console.log('RaidLoad: retrieve succeeded');
        this.setAverageAttendees(this.raids);
        console.log(this.averageAttendees);
      },
      (err) => {
        console.error('RaidLoad: retrieve failed');
        console.error(err);
      }
    );
  }

  displayRaid = function (raid) {
    this.selected = raid;
  };
  displayTable = function () {
    this.selected = null;
  };
  deleteRaid(id) {
    this.raidService.destroy(id).subscribe(
      (good) => {
        this.index();
      },
      (bad) => {
        console.error(bad);
      }
    );
  }

  addRaid(raid: Raid): void {
    console.log(raid);
    this.raidService.create(raid).subscribe(
      (good) => {
        this.loadRaid();
        console.log('RaidComponent: Raid created:');
        console.log(good);
      },
      (bad) => {
        console.error('RaidListComponent: Error creating Raid');
        console.error(bad);
      }
    );
  }
}
