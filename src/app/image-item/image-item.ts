import { ChangeDetectionStrategy, Component, input, Input } from '@angular/core';
import { Image } from '../models/image';
@Component({
  selector: 'app-image-item',
  imports: [],
  template: `
    <div class="gallery-item" [class.first]="isFeatured()">
      <img id="picture" [src]="image().source" [alt]="image().alt" [title]="image().title">
      <p>{{ image().title }}</p>
      <button><img id="trash" src="./lecho.png" alt="trash"></button>
    </div>
  `,
  styleUrl: './image-item.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ImageItem {
  image = input.required<Image>();
  isFeatured = input<Boolean>();
  indexImage = input<number>();
}

// export class selectDelete {
// }
