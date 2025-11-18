import { Component, input, Input } from '@angular/core';
import { Image } from '../models/image';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/compiler';

@Component({
  selector: 'app-image-item',
  imports: [],
  template: `
    <div class="gallery-item">
      <img [src]="image().source" [alt]="image().alt" [title]="image().title">
      <p>{{ image().title }} - {{isFeatured()}}</p>
    </div>
  `,
  // templateUrl: './image-item.html',
  styleUrl: './image-item.css',
  // schemas: CUSTOM_ELEMENTS_SCHEMA
})
export class ImageItem {
  // @Input({ required: true }) image!: Image;
  // @Input() isFeatured: boolean = false;
  image = input.required<Image>();
  isFeatured = input<Boolean>();
}
