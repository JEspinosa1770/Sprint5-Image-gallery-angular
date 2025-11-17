import { Component } from '@angular/core';
import { Image } from '../models/image'

@Component({
  selector: 'app-gallery',
  imports: [],
  templateUrl: './gallery.html',
  styleUrl: './gallery.css',
})
export class Gallery {
  imagesArray: Image[] = [
    {
      id: 1,
      source: "https://picsum.photos/id/964/300/200.jpg",
      alt: "Image 1",
      title: "",
      selected: false,
      deleted: false
    },
    {
      id: 1,
      source: "https://picsum.photos/id/864/300/200.jpg",
      alt: "Image 1",
      title: "",
      selected: false,
      deleted: false
    },
    {
      id: 1,
      source: "https://picsum.photos/id/764/300/200.jpg",
      alt: "Image 1",
      title: "",
      selected: false,
      deleted: false
    },
    {
      id: 1,
      source: "https://picsum.photos/id/664/300/200.jpg",
      alt: "Image 1",
      title: "",
      selected: false,
      deleted: false
    },
    {
      id: 1,
      source: "https://picsum.photos/id/564/300/200.jpg",
      alt: "Image 1",
      title: "",
      selected: false,
      deleted: false
    },
    {
      id: 1,
      source: "https://picsum.photos/id/464/300/200.jpg",
      alt: "Image 1",
      title: "",
      selected: false,
      deleted: false
    },
    {
      id: 1,
      source: "https://picsum.photos/id/364/300/200.jpg",
      alt: "Image 1",
      title: "",
      selected: false,
      deleted: false
    },
    {
      id: 1,
      source: "https://picsum.photos/id/264/300/200.jpg",
      alt: "Image 1",
      title: "",
      selected: false,
      deleted: false
    },
    {
      id: 1,
      source: "https://picsum.photos/id/164/300/200.jpg",
      alt: "Image 1",
      title: "",
      selected: false,
      deleted: false
    }
  ];
}
