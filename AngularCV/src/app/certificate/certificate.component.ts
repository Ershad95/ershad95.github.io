import { Component, Input, OnInit,AfterContentInit } from '@angular/core';
import CertificateModel from "../Model/CertificateModel"
import {DelayService} from '../Service/DealyService'
import {CertificateService} from "../Service/certificate.service"
@Component({
  selector: 'app-certificate',
  templateUrl: './certificate.component.html',
  styleUrls: ['./certificate.component.css']
})
export class CertificateComponent implements OnInit,AfterContentInit{


   certificates:CertificateModel[]=[];
   placeholder:number[]=[];
  searchItem:string = "";

  @Input() showInhomePage : boolean=false;
  constructor(private service : CertificateService) { 
    
  }
  
  async ngAfterContentInit(): Promise<void> {
    
    if(this.showInhomePage){
      this.placeholder = [1,2,3]
    }else{
      this.placeholder = [1,2,3,4,5,6,7,8,9]
    }
    await new DelayService().delay(2500)
    this.prepareData();

  }
  
  change(){
    this.prepareData();
  }
  
  ngOnInit(): void {
    
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
