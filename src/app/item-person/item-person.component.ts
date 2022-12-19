import { Component, Input, OnInit } from '@angular/core';
import { Firefighter } from '../models/firefighter';

@Component({
  selector: 'app-item-person',
  templateUrl: './item-person.component.html',
  styleUrls: ['./item-person.component.scss']
})
export class ItemPersonComponent implements OnInit {

  @Input() firefighter:Firefighter = {} as Firefighter;
  show:boolean = false;
  alt:boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  togglePhoto(){
    this.show = !this.show;
  }

}
