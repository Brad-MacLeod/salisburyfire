import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemLotteryComponent } from './item-lottery.component';

describe('ItemLotteryComponent', () => {
  let component: ItemLotteryComponent;
  let fixture: ComponentFixture<ItemLotteryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemLotteryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemLotteryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
