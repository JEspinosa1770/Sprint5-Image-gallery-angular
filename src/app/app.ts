import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ImageItem } from './image-item/image-item';
import { Gallery } from "./gallery/gallery";
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ImageItem, Gallery],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('image-gallery');
}
