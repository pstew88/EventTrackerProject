export class Song {
  id: number;
  title: string;
  artist: string;
  releaseDate: string;
  price: number;

  constructor(
  id?: number,
  title?: string,
  artist?: string,
  releaseDate?: string,
  price?: number,
  ){
    this.id=id;
    this.title=title;
    this.artist=artist;
    this.releaseDate=releaseDate;
    this.price=price;}
}
