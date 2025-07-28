import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageViewObject } from './page-view-object';

describe('PageViewObject', () => {
  let component: PageViewObject;
  let fixture: ComponentFixture<PageViewObject>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageViewObject]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageViewObject);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
