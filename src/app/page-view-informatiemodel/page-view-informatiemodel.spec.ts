import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageViewInformatiemodel } from './page-view-informatiemodel';

describe('PageViewInformatiemodel', () => {
  let component: PageViewInformatiemodel;
  let fixture: ComponentFixture<PageViewInformatiemodel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageViewInformatiemodel]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageViewInformatiemodel);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
