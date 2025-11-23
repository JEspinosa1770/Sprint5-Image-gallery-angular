import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideZonelessChangeDetection } from '@angular/core';
import { Image } from '../../models/image';
import { Gallery } from './gallery';

describe('Gallery', () => {
  let component: Gallery;
  let fixture: ComponentFixture<Gallery>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Gallery],
      providers: [provideZonelessChangeDetection()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Gallery);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return filtered array for non-deleteds', () => {
  component.imagesArray = [
    {
      id: 1,
      source: "https://picsum.photos/id/964/300/200.jpg",
      alt: "Picture of a snowy road",
      title: "Snowy road",
      selected: false,
      deleted: false
    },
    {
      id: 2,
      source: "https://picsum.photos/id/864/300/200.jpg",
      alt: "Big city skyline",
      title: "Big city",
      selected: false,
      deleted: false
    },
    {
      id: 3,
      source: "https://picsum.photos/id/764/300/200.jpg",
      alt: "Image 3",
      title: "Glass building and palm trees",
      selected: false,
      deleted: true
    },
  ]
  const resultFiltered: Image[] = component.filterDeletedImages();

  expect(resultFiltered.length).toBe(2);
  expect(resultFiltered.every(img => !img.deleted)).toBe(true);
  expect(resultFiltered.find(img => img.id === 3)).toBeUndefined();
  })

  it('should mark image as deleted when confirms in onNotify', () => {
    spyOn(window, 'confirm').and.returnValue(true); 
    const imageId: number = 1;
    component.onNotify(imageId);

    const deletedImage: Image | undefined = component.imagesArray.find(img => img.id === imageId);
    expect(deletedImage?.deleted).toBe(true);
  });

  it('should not mark image as deleted when user cancels in onNotify', () => {
    spyOn(window, 'confirm').and.returnValue(false);
    const imageId: number = 1;
    component.onNotify(imageId);

    const nonDeletedImage: Image | undefined = component.imagesArray.find(img => img.id === imageId);
    expect(nonDeletedImage?.deleted).toBe(false);
  });

});
