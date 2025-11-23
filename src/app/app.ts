import { Component, signal } from '@angular/core';
import { Gallery } from "./components/gallery/gallery";
@Component({
  selector: 'app-root',
  imports: [Gallery],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('image-gallery');
}
