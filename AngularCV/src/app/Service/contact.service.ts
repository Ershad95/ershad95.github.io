import { Injectable } from '@angular/core';
import ContactModel from '../Model/ContactModel'
@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private source : ContactModel[]=[
    {icon:"fa-map",title:"Address",value:"Iran,Tehran",withLink:false},
    {icon:"fa-linkedin",title:"Linkedin",value:"Ershad74R",withLink:true,url:"https://ir.linkedin.com/in/ershad74"},
    {icon:"fa-instagram",title:"Instagram",value:"Ershad74R",withLink:true,url:"https://instagram/Ershad74R"},
    {icon:"fa-github",title:"Github",value:"Ershad95",withLink:true,url:"https://github.com/Ershad95"},
    {icon:"fa-send",title:"Email",value:"ErshadRaoufi@gmail.com",withLink:true,url:"mailto:ErshadRaoufi@gmail.com"},
    {icon:"fa-film",title:"Aparat",value:"Ershad74",withLink:true,url:"https://www.aparat.com/Ershad74"},
  ];
  constructor() { }

  GetAllcontacts() :ContactModel[] {
    return this.source;
  }
}
