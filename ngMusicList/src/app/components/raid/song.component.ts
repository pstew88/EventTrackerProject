import { SongService } from '../../services/song.service';
import { Component, OnInit } from '@angular/core';
import { Song } from 'src/app/models/song';
import { Sort } from '@angular/material/sort';

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
  sortedSongs: Song[];

  constructor(private songService: SongService) {
  }

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
  sortData(sort: Sort) {
    const data = this.songs.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedSongs = data;
      return;
    }

    this.sortedSongs = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'title': return compare(a.title, b.title, isAsc);
        case 'releaseDate': return compare(a.releaseDate, b.releaseDate, isAsc);
        case 'artist': return compare(a.artist, b.artist, isAsc);
        case 'price': return compare(a.price, b.price, isAsc);
        default: return 0;
      }
    });
  }
}

function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
