import { Component } from '@angular/core';
import { Image } from '../models/image'
import { ImageItem } from '../image-item/image-item';
@Component({
  selector: 'app-gallery',
  imports: [ImageItem],
  templateUrl: './gallery.html',
  styleUrl: './gallery.css',
})
export class Gallery {
  imagesArray: Image[] = [
    {
      id: 1,
      source: "https://picsum.photos/id/964/300/200.jpg",
      alt: "Image 1",
      title: "Image 1",
      selected: false,
      deleted: false
    },
    {
      id: 2,
      source: "https://picsum.photos/id/864/300/200.jpg",
      alt: "Image 2",
      title: "Image 2",
      selected: false,
      deleted: false
    },
    {
      id: 3,
      source: "https://picsum.photos/id/764/300/200.jpg",
      alt: "Image 3",
      title: "Image 3",
      selected: false,
      deleted: false
    },
    {
      id: 4,
      source: "https://picsum.photos/id/664/300/200.jpg",
      alt: "Image 4",
      title: "Image 4",
      selected: false,
      deleted: false
    },
    {
      id: 5,
      source: "https://picsum.photos/id/564/300/200.jpg",
      alt: "Image 5",
      title: "Image 5",
      selected: false,
      deleted: false
    },
    {
      id: 6,
      source: "https://picsum.photos/id/464/300/200.jpg",
      alt: "Image 6",
      title: "Image 6",
      selected: false,
      deleted: false
    },
    {
      id: 7,
      source: "https://picsum.photos/id/364/300/200.jpg",
      alt: "Image 7",
      title: "Image 7",
      selected: false,
      deleted: false
    },
    {
      id: 8,
      source: "https://picsum.photos/id/264/300/200.jpg",
      alt: "Image 8",
      title: "Image 8",
      selected: false,
      deleted: false
    },
    {
      id: 9,
      source: "https://picsum.photos/id/164/300/200.jpg",
      alt: "Image 9",
      title: "Image 9",
      selected: false,
      deleted: false
    }
  ];
}
