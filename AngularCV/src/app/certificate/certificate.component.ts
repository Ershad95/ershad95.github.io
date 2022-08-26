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
  @Input() showInhomePage : boolean=false;
  constructor(private service : CertificateService) { 
    
  }

  ngOnInit(): void {
    if(!this.showInhomePage){
      this.certificates = this.service.GetAllCertificate();
    }else{
      this.certificates = this.service.GetHomeCertificate();
    }
  }

}
