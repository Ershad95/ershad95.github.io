import { Component, Input, OnInit } from '@angular/core';
import ContactService from '../Service/contact.service'
import ContactModel from '../Model/ContactModel'
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {


   contactItems:ContactModel[]=[];
   @Input() showInHomePage:boolean=false;
  constructor(private contactService : ContactService) { 
     this.contactItems = contactService.GetAllcontacts();
  }

  ngOnInit(): void {
  }

}