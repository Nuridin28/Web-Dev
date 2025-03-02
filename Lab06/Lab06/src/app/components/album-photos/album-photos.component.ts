// album-photos.component.ts
import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { IAlbum } from '../../types';
import { AlbumsService } from '../../services/albums.service';
import { ActivatedRoute } from '@angular/router';
import { PhotosService } from '../../services/photos.service';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-album-photos',
  standalone: true,
  templateUrl: './album-photos.component.html',
  styleUrls: ['./album-photos.component.scss'],
  imports: [NgForOf]
})
export class AlbumPhotosComponent implements OnInit, OnDestroy {
  albumId: number | null = null;
  album: IAlbum | undefined;
  photos: any[] = [];
  currentIndex: number = 0;
  intervalId: any;

  private albumService = inject(AlbumsService);
  private photosService = inject(PhotosService);
  private route = inject(ActivatedRoute);

  ngOnInit(): void {
    this.albumId = Number(this.route.snapshot.paramMap.get('id'));

    if (this.albumId) {
      this.albumService.getAlbums().subscribe({
        next: data => {
          this.album = data.find((album: IAlbum) => album.id === this.albumId);
        },
        error: err => {
          console.error('Ошибка при получении альбома', err);
        }
      });
    }

    this.photosService.getPhotos('nature').then((response: any) => {
      this.photos = response.photos;
      this.startAutoPlay();
    });
  }

  startAutoPlay() {
    this.intervalId = setInterval(() => {
      this.nextSlide();
    }, 3000);
  }

  stopAutoPlay() {
    clearInterval(this.intervalId);
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.photos.length;
  }

  prevSlide() {
    this.currentIndex = (this.currentIndex - 1 + this.photos.length) % this.photos.length;
  }

  ngOnDestroy(): void {
    this.stopAutoPlay();
  }

  goBack() {
    window.history.back();
  }
}
