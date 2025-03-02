export interface IAlbum {
  userId: number;
  id: number;
  title: string;
}

export interface IPhoto {
  id: number;
  url: string;
  photographer: string;
  src: {
    original: string;
    large2x: string;
    large: string;
    medium: string;
    small: string;
    portrait: string;
    landscape: string;
  };
  alt: string;
}
