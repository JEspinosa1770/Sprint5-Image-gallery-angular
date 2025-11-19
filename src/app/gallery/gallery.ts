import { Component } from '@angular/core';
import { Image } from '../models/image'
import { ImageItem } from '../image-item/image-item';
@Component({
  selector: 'app-gallery',
  imports: [ImageItem],
  template: `onNotify(msg: string)`,
  templateUrl: './gallery.html',
  styleUrl: './gallery.css',
})
export class Gallery {
  imagesArray: Image[] = [
    {
      id: 1,
      source: "https://picsum.photos/id/964/300/200.jpg",
      alt: "Picture of a snowy road",
      title: "Snowy road",
      selected: false,
      deleted: false
    },
    {
      id: 2,
      source: "https://picsum.photos/id/864/300/200.jpg",
      alt: "Big city skyline",
      title: "Big city",
      selected: false,
      deleted: false
    },
    {
      id: 3,
      source: "https://picsum.photos/id/764/300/200.jpg",
      alt: "Image 3",
      title: "Glass building and palm trees",
      selected: false,
      deleted: false
    },
    {
      id: 4,
      source: "https://picsum.photos/id/664/300/200.jpg",
      alt: "Image 4",
      title: "Snowy mountains",
      selected: false,
      deleted: false
    },
    {
      id: 5,
      source: "https://picsum.photos/id/564/300/200.jpg",
      alt: "Image 5",
      title: "Narrow canyon in the mountains",
      selected: false,
      deleted: false
    },
    {
      id: 6,
      source: "https://picsum.photos/id/464/300/200.jpg",
      alt: "Image 6",
      title: "Book of criminals",
      selected: false,
      deleted: false
    },
    {
      id: 7,
      source: "https://picsum.photos/id/364/300/200.jpg",
      alt: "Image 7",
      title: "Airplane parking",
      selected: false,
      deleted: false
    },
    {
      id: 8,
      source: "https://picsum.photos/id/264/300/200.jpg",
      alt: "Image 8",
      title: "Breakwater",
      selected: false,
      deleted: false
    },
    {
      id: 9,
      source: "https://picsum.photos/id/164/300/200.jpg",
      alt: "Image 9",
      title: "Water channel in a village",
      selected: false,
      deleted: false
    }
  ];
  
  get filteDeletedImages() {
    return this.imagesArray.filter(img => !img.deleted);
  }

  onNotify(imageId: number) {
    console.log(imageId)
    const imageToDelete = this.imagesArray.find(img => img.id === imageId);
    if (imageToDelete) {
      imageToDelete.deleted = true;
    }
  };
}
