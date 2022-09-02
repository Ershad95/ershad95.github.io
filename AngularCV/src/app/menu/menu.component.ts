import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../Model/ConfigModel';
import { ConfigService } from '../Service/config.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {


  menuItems:MenuItem[];
  constructor(private config:ConfigService) { 
    this.menuItems = config.GetMenuItems().sort((a,b)=>a.order-b.order);
  }

  ngOnInit(): void {
  }

}
