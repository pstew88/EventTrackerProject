import { Pipe, PipeTransform } from '@angular/core';
import { Song } from '../models/song';

@Pipe({
  name: 'filterByYear'
})
export class FilterByYearPipe implements PipeTransform {

    transform(songs: Song[], year: string): Song[] {
      const result = [];
      if (year === 'all') {
        return songs;
      }
      // tslint:disable-next-line:prefer-for-of

        // tslint:disable-next-line:prefer-for-of
        for (let i = 0; i < songs.length; i++) {
          if (songs[i].releaseDate.startsWith(year)) {
            result.push(songs[i]);
          }
        }
      return result;
    }
  }
// pokeType : selectedType" (click)="selected = poke"
