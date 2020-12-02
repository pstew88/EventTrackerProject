import { Raid } from './../models/raid';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class RaidService {
  baseUrl = 'http://localhost:8085/';
  url = this.baseUrl + 'api/raids';

  index(): Observable<Raid[]> {
    return this.http.get<Raid[]>(this.url)
      .pipe(
        catchError((err: any) => {
          console.log(err);
          return throwError('KABOOM');
        })
      );
  }

  create(raid: Raid): Observable<Raid> {
    return this.http.post<Raid>(this.url, raid).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError('RaidService.create(): Error retrieving Raid list');
      })
    );
  }

  update(raid: Raid): Observable<Raid> {
    return this.http.put<Raid>(`${this.url}/${raid.id}`, raid).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError('RaidService.update(): Error updating Raid list');
      })
    );
  }
  destroy(raidId: number): Observable<boolean> {
    return this.http.delete<boolean>(`${this.url}/${raidId}`).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError('RaidService.delete(): Error deleting Raid list');
      })
    );
    }
  constructor(private http: HttpClient) { }
}
