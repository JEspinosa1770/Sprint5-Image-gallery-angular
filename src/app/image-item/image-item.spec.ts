import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageItem } from './image-item';

describe('ImageItem', () => {
  let component: ImageItem;
  let fixture: ComponentFixture<ImageItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImageItem]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageItem);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
