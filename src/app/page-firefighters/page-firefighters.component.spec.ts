import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageFirefightersComponent } from './page-firefighters.component';

describe('PageFirefightersComponent', () => {
  let component: PageFirefightersComponent;
  let fixture: ComponentFixture<PageFirefightersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageFirefightersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageFirefightersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
