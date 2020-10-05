export interface Storefront{
  listing_id:string;
  title:string;
  description:string;
  price:string;
  currency_code:string;
  url_fullXfull:string[];
  image: string;
}

export class StorefrontModel {
  listing_id:string;
  title:string;
  price:string;
  currency_code:string;
}