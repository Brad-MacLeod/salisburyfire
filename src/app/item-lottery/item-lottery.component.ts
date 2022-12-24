import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Draw } from '../models/Draw';

@Component({
  selector: 'app-item-lottery',
  templateUrl: './item-lottery.component.html',
  styleUrls: ['./item-lottery.component.scss']
})
export class ItemLotteryComponent implements OnInit {

  howTo:boolean = false;
  requirements: boolean = false;
  configUrl:string = "https://apic.rafflebox.ca/event-service/v2/events/nb5050";
  mydraw: Draw = new Draw;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<any>(this.configUrl).subscribe((results) => 
    {
        this.mydraw  = results.data.data;
    });
  }

  formatDollars(amt:number):string{
    const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    
      // These options are needed to round to whole numbers if that's what you want.
      //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
      //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
    });
    return formatter.format(amt);
  }

  formatDate(dte:Date):string{
    var d = new Date(dte);
    var str = d.toDateString();
    str += " " + d.getHours() + ":";
    if(d.getMinutes() < 10)
      str += "0";
    str += d.getMinutes();
    return str;
  }

  getURL(){
    //var url = "location.href='https://";
    //var url = "'/external?url=location.href=https://";
    var url = "https://";

    if(this.mydraw.status == "active"){
      url += "checkout.rafflebox.ca/single?eventId=" + this.mydraw.id + "&eventMemberNumber=7&locale=en"
    }else{
      url += "nb5050.ca/7";
    }

    //url += "';";
    window.open(url, "_self");
    //return url;
  }

}
