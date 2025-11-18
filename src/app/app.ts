import { Component, signal } from '@angular/core';
import { ImageItem } from './image-item/image-item';
import { Gallery } from "./gallery/gallery";
@Component({
  selector: 'app-root',
  imports: [ImageItem, Gallery],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('image-gallery');
}
