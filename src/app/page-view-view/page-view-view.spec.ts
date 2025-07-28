import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageViewView } from './page-view-view';

describe('PageViewView', () => {
  let component: PageViewView;
  let fixture: ComponentFixture<PageViewView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageViewView]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageViewView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
