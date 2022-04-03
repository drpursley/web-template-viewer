import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebTemplateViewerComponent } from './web-template-viewer.component';

describe('WebTemplateViewerComponent', () => {
  let component: WebTemplateViewerComponent;
  let fixture: ComponentFixture<WebTemplateViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebTemplateViewerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WebTemplateViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
