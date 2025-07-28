import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformatiemodelSidebar } from './informatiemodel-sidebar';

describe('InformatiemodelSidebar', () => {
  let component: InformatiemodelSidebar;
  let fixture: ComponentFixture<InformatiemodelSidebar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InformatiemodelSidebar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InformatiemodelSidebar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
