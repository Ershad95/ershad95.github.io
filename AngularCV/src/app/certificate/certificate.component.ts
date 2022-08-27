import { Component, Input, OnInit } from '@angular/core';
import CertificateModel from "../Model/CertificateModel"

import {CertificateService} from "../Service/certificate.service"
@Component({
  selector: 'app-certificate',
  templateUrl: './certificate.component.html',
  styleUrls: ['./certificate.component.css']
})
export class CertificateComponent implements OnInit {


   certificates:CertificateModel[]=[];
  searchItem:string = "";

  @Input() showInhomePage : boolean=false;
  constructor(private service : CertificateService) { 
    
  }
  change(){
    this.prepareData();
  }
  
  ngOnInit(): void {
    this.prepareData();
  }

  prepareData():CertificateModel[]{
    if(!this.showInhomePage){
      this.certificates = this.service.GetAllCertificate(this.searchItem);
    }else{
      this.certificates = this.service.GetHomeCertificate();
    }
    return this.certificates;
  }

}
