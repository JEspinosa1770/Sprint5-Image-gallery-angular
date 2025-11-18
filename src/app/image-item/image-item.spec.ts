import { ComponentFixture, TestBed } from '@angular/core/testing';
import { inputBinding, provideZonelessChangeDetection, signal } from '@angular/core';
import { Image } from '../models/image';
import { ImageItem } from './image-item';

describe('ImageItem', () => {
  let component: ImageItem;
  let fixture: ComponentFixture<ImageItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImageItem],
      providers: [provideZonelessChangeDetection()],
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageItem);
    component = fixture.componentInstance;

    const mockImage: Image = {
      id: 1,
      source: 'https://example.com/test-image.jpg',
      alt: 'Test image alt text',
      title: 'Test Image Title',
      selected: false,
      deleted: false
    };
    
    fixture.componentRef.setInput('image', mockImage);
    fixture.componentRef.setInput('isFeatured', false);

    fixture.detectChanges();
  });
  
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display image with correct properties', () => {
    const compiled = fixture.nativeElement;
    const img = compiled.querySelector('img');
    
    expect(img).toBeTruthy();
    expect(img.src).toContain('test-image.jpg');
    expect(img.alt).toBe('Test image alt text');
    expect(img.title).toBe('Test Image Title');
  });

  it('should display image title in paragraph', () => {
    const compiled = fixture.nativeElement;
    const paragraph = compiled.querySelector('p');
    
    expect(paragraph).toBeTruthy();
    expect(paragraph.textContent).toContain('Test Image Title');
  });
});
