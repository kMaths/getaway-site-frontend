import { Component, OnInit } from '@angular/core';
import { ArtworkService } from '../services/artwork.service';
import { Artwork } from './artwork';

@Component({
  selector: 'app-artwork',
  templateUrl: './artwork.component.html',
  styleUrls: ['./artwork.component.css']
})
export class ArtworkComponent implements OnInit {

  gallery : Artwork[];
  folder: string = './uploads/';

  constructor(private artworkService: ArtworkService) { }

  ngOnInit(): void {
    this.artworkService.getAllArt().subscribe(data => {
      this.gallery = data;
    })
  }

}
