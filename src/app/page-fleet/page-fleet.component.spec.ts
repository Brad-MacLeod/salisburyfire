import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageFleetComponent } from './page-fleet.component';

describe('PageFleetComponent', () => {
  let component: PageFleetComponent;
  let fixture: ComponentFixture<PageFleetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageFleetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageFleetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
