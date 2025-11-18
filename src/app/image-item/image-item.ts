import { ChangeDetectionStrategy, Component, input, Input } from '@angular/core';
import { Image } from '../models/image';
@Component({
  selector: 'app-image-item',
  imports: [],
  template: `
    <div [class.first]="isFeatured()" class="gallery-item">
      <img [src]="image().source" [alt]="image().alt" [title]="image().title">
      <p>{{ image().title }}</p>
    </div>
  `,
  styleUrl: './image-item.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ImageItem {
  image = input.required<Image>();
  isFeatured = input<Boolean>();
}
