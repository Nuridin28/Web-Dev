import { Injectable } from '@angular/core';
import { createClient } from 'pexels';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {
  client = createClient(environment.API_KEY);

  constructor() {}

  getPhotos(query: string) {
    return this.client.photos.search({ query, per_page: 10 });
  }
}
