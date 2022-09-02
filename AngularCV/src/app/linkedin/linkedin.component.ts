import { Component, OnInit } from '@angular/core';
import {DelayService} from '../Service/dealy.service'

@Component({
  selector: 'app-linkedin',
  templateUrl: './linkedin.component.html',
  styleUrls: ['./linkedin.component.css']
})
export class LinkedinComponent implements OnInit {

  constructor(private delayService:DelayService) { }
  loaded=false;
  placeholder:number[]=[1,2,3,4,5,6];
  async ngOnInit(): Promise<void> {
    await this.delayService.delay(2500)
    this.loaded=true;
  }
  
}
