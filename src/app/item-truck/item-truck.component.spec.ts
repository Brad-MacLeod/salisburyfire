import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemTruckComponent } from './item-truck.component';

describe('ItemTruckComponent', () => {
  let component: ItemTruckComponent;
  let fixture: ComponentFixture<ItemTruckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemTruckComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemTruckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
