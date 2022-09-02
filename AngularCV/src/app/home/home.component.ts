import { Component, OnInit } from '@angular/core';
import { EncryptionService } from '../Service/encryptionService';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  src:string="";
  des:string="";
  constructor(private security : EncryptionService) {



   }

  ngOnInit(): void {

    this.src = this
    .security
    .encryptUsingTripleDES('[{"imageUrl": "../../assets/certificates/mongo.jpeg", "altImage": "Mongo Univercity Certification Asp.net MVC Core MasterClass  ارشاد رئوفی", "url": "https://www.udemy.com/", "showInHomePage": true,"title": "Mongo Certification MongoDb For SQL Pros"}]',false)
    this.des = this.security
    .decryptUsingTripleDES(this.src);
  }


}
