import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IAlbum } from '../../types';
import { AlbumsService } from '../../services/albums.service';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-album-detail',
  standalone: true,
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.scss'],
  imports: [NgIf, FormsModule]
})
export class AlbumDetailComponent implements OnInit {
  albumId: number | null = null;
  album: IAlbum | undefined;
  updatedTitle: string = '';

  private albumService = inject(AlbumsService);
  private route = inject(ActivatedRoute);

  ngOnInit(): void {
    this.albumId = Number(this.route.snapshot.paramMap.get('id'));
    if (this.albumId) {
      this.albumService.getAlbums().subscribe({
        next: data => {
          this.album = data.find((album: IAlbum) => album.id === this.albumId);
          if (this.album) {
            this.updatedTitle = this.album.title;
          }
        },
        error: err => {
          console.error('Ошибка при получении альбома', err);
        }
      });
    }
  }

  handlePhotosClick() {
    window.location.href = `${window.location.href}/photos`;
  }

  saveChanges(): void {
    if (this.album) {
      this.album.title = this.updatedTitle;
      console.log('Изменения сохранены:', this.album);
    }
  }

  goBack() {
    window.history.back();
  }
}
