import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideZonelessChangeDetection } from '@angular/core';
import { Image } from '../models/image';
import { ImageItem } from './image-item';
import { By } from '@angular/platform-browser';

describe('ImageItem', () => {
  let component: ImageItem;
  let fixture: ComponentFixture<ImageItem>;
  
  const mockImage: Image = {
    id: 1,
    source: 'https://example.com/test-image.jpg',
    alt: 'Test image alt text',
    title: 'Test Image Title',
    selected: false,
    deleted: false
  };
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImageItem],
      providers: [provideZonelessChangeDetection()],
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageItem);
    component = fixture.componentInstance;
    
    fixture.componentRef.setInput('image', mockImage);
    fixture.componentRef.setInput('isFeatured', false);

    fixture.detectChanges();
  });
  
  it('should class ImageItem create', () => {
    expect(component).toBeTruthy();
  });

  it('should display image with correct properties', () => {
    const compiled = fixture.nativeElement;
    const img = compiled.querySelector('img') as HTMLImageElement;

    expect(img).toBeTruthy();
    expect(img.src).toContain('test-image.jpg');
    expect(img.alt).toBe('Test image alt text');
    expect(img.title).toBe('Test Image Title');
    
  });

  it('should display image title in paragraph', () => {
    const compiled = fixture.nativeElement;
    const paragraph = compiled.querySelector('p') as HTMLParagraphElement;

    expect(paragraph).toBeTruthy();
    expect(paragraph.textContent).toContain('Test Image Title');
  });

  it('should emit the correct value when button is clicked', () => {
    spyOn(component.notify, 'emit');

    const clickedButton = fixture.debugElement.query(By.css('button'));
    clickedButton.triggerEventHandler('click', null);

    expect(component.notify.emit).toHaveBeenCalledWith(1);
  });

  it('should emit image id when sendToParent is called', () => {
    spyOn(component.notify, 'emit');

    component.sendToParent();

    expect(component.notify.emit).toHaveBeenCalledWith(1);
    expect(component.notify.emit).toHaveBeenCalledTimes(1);
  });

  it('should have notify output configured', () => {
    expect(component.notify).toBeDefined();
  });  
});
