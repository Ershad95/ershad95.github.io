import { Injectable } from '@angular/core';
import CertificateModel from "../Model/CertificateModel"
@Injectable({
  providedIn: 'root'
})
export class CertificateService {

  private source: CertificateModel[] = [

    {
      imageUrl: "../../assets/certificates/mongo.jpeg",
      altImage: "Mongo Univercity Certification Asp.net MVC Core MasterClass  ارشاد رئوفی",
      url: "https://www.udemy.com/",
      showInHomePage: true,
      title: "Mongo Certification MongoDb For SQL Pros"
    },
    {
      imageUrl: "../../assets/certificates/bc.jpeg",
      altImage: "Eduonix Certification For C# ارشاد رئوفی",
      url: "/",
      showInHomePage: false,
      title: "Eduonix Certification For C#"
    },
    {
      imageUrl: "../../assets/certificates/jq.jpg",
      altImage: "daneshjooyar JS Certificate_مدرک JS دانشجویار_ارشاد رئوفی",
      url: "https://daneshjooyar.com/cf/FmOBksPYHL/",
      showInHomePage: false,
      title: "soloLearn Certification For JQuery"
    },
    {
      imageUrl: "../../assets/certificates/rwd.png",
      altImage: "Eduonix Certification For C# ارشاد رئوفی",
      url: "/",
      showInHomePage: false,
      title: "Eduonix Certification For Responsive Web design"
    },
    {
      imageUrl: "../../assets/certificates/ui.jpg",
      altImage: "Great Leaning Accademy _مدرک UI/UX ارشاد رئوفی",
      url: "https://daneshjooyar.com/cf/FmOBksPYHL/",
      showInHomePage: false,
      title: "Great Learning Accademy Certification For UI/UX"
    },
    {
      imageUrl: "../../assets/certificates/sqli.png",
      altImage: "daneshjooyar JS Certificate_مدرک JS دانشجویار_ارشاد رئوفی",
      url: "/",
      showInHomePage: false,
      title: "SoloLearn Certification For SQL"
    },
    {
      imageUrl: "../../assets/certificates/certificate_blazor.jpg",
      altImage: "daneshjooyar Blazor Certificate_مدرک Blazor دانشجویار_ارشاد رئوفی",
      url: "https://daneshjooyar.com/cf/FmOBksPYHL/",
      showInHomePage: false,
      title: "Daneshjooyar Certification For Asp.net Core/Blazor"
    },
    {
      imageUrl: "../../assets/certificates/c.png",
      altImage: "SoloLearn Certification C# ارشاد رئوفی",
      url: "/",
      showInHomePage: true,
      title: "SoloLearn Certification For C#"
    },
    {
      imageUrl: "../../assets/certificates/certificate_js.jpg",
      altImage: "daneshjooyar JS Certificate_مدرک JS دانشجویار_ارشاد رئوفی",
      url: "https://daneshjooyar.com/cf/FmOBksPYHL/",
      showInHomePage: false,
      title: "Daneshjooyar Certification For Advance Javascript"
    },
  ];
  constructor() { }


  GetAllCertificate(): CertificateModel[] {
    return this.source;
  }
  GetHomeCertificate(): CertificateModel[] {
    return this.source.filter(x => x.showInHomePage);
  }
}
