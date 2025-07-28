import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageViewExtern } from './page-view-extern';

describe('PageViewExtern', () => {
  let component: PageViewExtern;
  let fixture: ComponentFixture<PageViewExtern>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageViewExtern]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageViewExtern);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
