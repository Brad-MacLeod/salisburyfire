import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemFbComponent } from './item-fb.component';

describe('ItemFbComponent', () => {
  let component: ItemFbComponent;
  let fixture: ComponentFixture<ItemFbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemFbComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemFbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
