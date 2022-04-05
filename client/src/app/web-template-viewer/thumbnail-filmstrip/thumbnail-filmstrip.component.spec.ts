import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThumbnailFilmstripComponent } from './thumbnail-filmstrip.component';

describe('ThumbnailFilmstripComponent', () => {
  let component: ThumbnailFilmstripComponent;
  let fixture: ComponentFixture<ThumbnailFilmstripComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThumbnailFilmstripComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThumbnailFilmstripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
