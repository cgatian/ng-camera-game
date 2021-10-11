import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PicResultViewerComponent } from './pic-result-viewer.component';

describe('PicResultViewerComponent', () => {
  let component: PicResultViewerComponent;
  let fixture: ComponentFixture<PicResultViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PicResultViewerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PicResultViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
