
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { Song } from '../models/song';

@Injectable({
  providedIn: 'root'
})
export class SongService {
  baseUrl=environment.baseUrl ||""
  url = this.baseUrl + 'api/songs';

  index(): Observable<Song[]> {
    return this.http.get<Song[]>(this.url)
      .pipe(
        catchError((err: any) => {
          console.log(err);
          return throwError('KABOOM');
        })
      );
  }

  create(song: Song): Observable<Song> {
    return this.http.post<Song>(this.url, song).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError('SongService.create(): Error retrieving Song list');
      })
    );
  }

  update(song: Song): Observable<Song> {
    return this.http.put<Song>(`${this.url}/${song.id}`, song).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError('SongService.update(): Error updating Song list');
      })
    );
  }
  destroy(songId: number): Observable<boolean> {
    return this.http.delete<boolean>(`${this.url}/${songId}`).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError('SongService.delete(): Error deleting Song list');
      })
    );
    }

  constructor(private http: HttpClient) { }
}
