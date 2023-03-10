import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageDrawComponent } from './page-draw.component';

describe('PageDrawComponent', () => {
  let component: PageDrawComponent;
  let fixture: ComponentFixture<PageDrawComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageDrawComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageDrawComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
