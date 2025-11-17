import { Component } from '@angular/core';
import { Image } from '../models/image'

@Component({
  selector: 'app-gallery',
  imports: [],
  templateUrl: './gallery.html',
  styleUrl: './gallery.css',
})
export class Gallery {
  imagesArray: Image[] = [];
}
