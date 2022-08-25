import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloadCVComponent } from './download-cv.component';

describe('DownloadCVComponent', () => {
  let component: DownloadCVComponent;
  let fixture: ComponentFixture<DownloadCVComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DownloadCVComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DownloadCVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
