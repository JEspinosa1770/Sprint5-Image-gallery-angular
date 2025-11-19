import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { Image } from '../models/image';
@Component({
  selector: 'app-image-item',
  imports: [],
  templateUrl: './image-item.html',
  styleUrl: './image-item.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ImageItem {
  image = input.required<Image>();
  isFeatured = input<boolean>();
  notify = output<number>()
}
