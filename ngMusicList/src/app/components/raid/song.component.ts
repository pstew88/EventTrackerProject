import { SongService } from '../../services/song.service';
import { Component, OnInit } from '@angular/core';
import { Song } from 'src/app/models/song';

@Component({
  selector: 'app-song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.css'],
})
export class SongComponent implements OnInit {
  songs: Song[] = [];
  selected: Song = null;
  newSong: Song = new Song();
  editSong: Song = null;
  // averageAttendees: number;

  constructor(private songService: SongService) {}

  ngOnInit(): void {
    this.loadSong();
  }

  index() {
    this.songService.index().subscribe(
      (good) => {
        this.songs = good;
      },
      (bad) => {
        console.error(bad);
      }
    );
  }

  // setAverageAttendees(songs: Song[]) {
  //   let result = null;
  //   let total = 0;
  //   for (let i = 0; i < songs.length; i++) {
  //     total = total + raids[i].numberOfAttendees;
  //   }
  //   result = total / raids.length;
  //   this.averageAttendees = result;
  //   console.log(result);
  // }

  updateSong(raid: Song) {
    this.songService.update(raid).subscribe(
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
    this.editSong = null;
  }

  setEditSong() {
    this.editSong = Object.assign({}, this.selected);
  }

  loadSong(): void {
    this.songService.index().subscribe(
      (data) => {
        this.songs = data;
        console.log('SongLoad: retrieve succeeded');
        // this.setAverageAttendees(this.raids);
        // console.log(this.averageAttendees);
      },
      (err) => {
        console.error('SongLoad: retrieve failed');
        console.error(err);
      }
    );
  }

  displaySong = function (song) {
    this.selected = song;
  };
  displayTable = function () {
    this.selected = null;
  };
  deleteSong(id) {
    this.songService.destroy(id).subscribe(
      (good) => {
        this.index();
      },
      (bad) => {
        console.error(bad);
      }
    );
  }

  addSong(song: Song): void {
    console.log(song);
    this.songService.create(song).subscribe(
      (good) => {
        this.loadSong();
        console.log('SongComponent: Song created:');
        console.log(good);
      },
      (bad) => {
        console.error('SongListComponent: Error creating Song');
        console.error(bad);
      }
    );
  }
}
