import { Component, inject, OnInit } from '@angular/core';
import { AlbumsService } from '../../services/albums.service';
import { IAlbum } from '../../types';
import { Router } from '@angular/router';

@Component({
  selector: 'app-albums',
  standalone: true,
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss']
})
export class AlbumsComponent implements OnInit {
  albums: IAlbum[] = [];
  visibleAlbums: IAlbum[] = [];
  itemsToShow: number = 12;

  private apiService = inject(AlbumsService);
  private router = inject(Router);

  ngOnInit(): void {
    this.apiService.getAlbums().subscribe(
      (data: IAlbum[]) => {
        this.albums = data;
        this.visibleAlbums = this.albums.slice(0, this.itemsToShow);
      },
      error => {
        console.error('Error fetching data', error);
      }
    );
  }

  openAlbumDetails(id: number): void {
    this.router.navigate([`/albums/${id}`]);
  }

  loadMore(): void {
    this.itemsToShow += 12;
    this.visibleAlbums = this.albums.slice(0, this.itemsToShow);
  }

  deleteAlbum(id: number): void {
    this.albums = this.albums.filter(album => album.id !== id);
    this.visibleAlbums = this.albums.slice(0, this.itemsToShow);
  }

  goToHome(): void {
    this.router.navigate(['/home']);
  }
}
