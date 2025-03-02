import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {IAlbum} from '../types';

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/albums';
  albums: IAlbum[] = [];
  constructor(private http: HttpClient) {
    this.http.get<IAlbum[]>(this.apiUrl).subscribe(
      (data: IAlbum[]) => {
        this.albums = data;
      }
    );
  }

  getAlbums(): Observable<any> {
    return this.http.get<IAlbum[]>(this.apiUrl);
  }
}
