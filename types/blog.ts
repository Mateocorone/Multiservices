// Tipo simple (si lo usas en algún lado)
export type Author = {
  name: string;
  image: string;
  bio?: string;
  _id?: number | string;
  _ref?: number | string;
};

// Tipo principal del blog
export type Blog = {
  _id: number;
  title: string;
  slug?: any;
  metadata?: string;
  body?: string;
  mainImage?: any;
  tags?: string[];
  publishedAt?: string;
};
