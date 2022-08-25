import { Injectable } from '@angular/core';
import CertificateModel from "../Model/CertificateModel"
@Injectable({
  providedIn: 'root'
})
export class CertificateService {

  private source:CertificateModel[]=[];
  constructor() { }


  GetAllCertificate():CertificateModel[]{
    return this.source;
  }
  GetHomeCertificate():CertificateModel[]{
    return this.source.filter(x=>x.showInHomePage);
  }
}
