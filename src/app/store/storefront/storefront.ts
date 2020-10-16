export interface Storefront{
  listing_id:number;
  title:string;
  description:string;
  price:string;
  currency_code:string;
  url_170x135:string[];
  image: string;
}

export class StorefrontModel {
  listing_id:string;
  title:string;
  price:string;
  currency_code:string;
  userId: number;
}