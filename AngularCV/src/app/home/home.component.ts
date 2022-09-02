import { Component, OnInit } from '@angular/core';
import { VisiblehomePageItem } from '../Model/ConfigModel';
import { ConfigService } from '../Service/config.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  VisiblityConfig : VisiblehomePageItem;
  constructor(private config:ConfigService) {
    this.VisiblityConfig = config.GetHomePageConfig();
   }

  ngOnInit(): void {

  }


}
