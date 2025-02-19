export interface Product {
  name: string;
  price: number;
  image: string;
  description: string;
  id: number;
  category: string;
  rating: number;
  countInStock: number;
  brand: string;
  link: string;
  likes: number;
  isLiked: boolean;
}

export interface IFilter {
  category: string;
}
