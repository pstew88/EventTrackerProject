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
        for (let i = 0; i < songs.length; i++) {
          if (songs[i].releaseDate.startsWith(year)) {
            result.push(songs[i]);
          }
        }
      return result;
    }
  }

