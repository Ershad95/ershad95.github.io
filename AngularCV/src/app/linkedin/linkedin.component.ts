import { Component, OnInit } from '@angular/core';
import {DelayService} from '../Service/DealyService'

@Component({
  selector: 'app-linkedin',
  templateUrl: './linkedin.component.html',
  styleUrls: ['./linkedin.component.css']
})
export class LinkedinComponent implements OnInit {

  constructor() { }
  loaded=false;
  placeholder:number[]=[1,2,3,4,5,6];
  async ngOnInit(): Promise<void> {
    await new DelayService().delay(2500)
    this.loaded=true;
  }
  
}
