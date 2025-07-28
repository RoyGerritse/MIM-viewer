import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageViewDomein } from './page-view-domein';

describe('PageViewDomein', () => {
  let component: PageViewDomein;
  let fixture: ComponentFixture<PageViewDomein>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageViewDomein]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageViewDomein);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
