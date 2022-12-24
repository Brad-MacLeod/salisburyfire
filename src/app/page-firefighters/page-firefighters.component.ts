import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Firefighter } from '../models/firefighter';

//import {firefighterData} from '../../data/firefighters.json';


@Component({
  selector: 'app-page-firefighters',
  templateUrl: './page-firefighters.component.html',
  styleUrls: ['./page-firefighters.component.scss']
})
export class PageFirefightersComponent implements OnInit {

  firefighters: Firefighter[] = [];
  configUrl = 'assets/data/firefighters.json';

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<Firefighter[]>(this.configUrl).subscribe((results) => 
      {
        this.firefighters = results;  

      });
  }

  getFireFighers(rank:string ="Firefighter"): Firefighter[]{
    var f = this.firefighters.filter(fire => fire.rank == rank);
    return f;
  }

  

}


 
