import { Injectable } from '@angular/core';
import { EncryptionService } from '../Service/encryption.service'
import encryptedData from '../config/configData.json'
import ConfigModel, { MenuItem, VisiblehomePageItem } from '../Model/ConfigModel';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  private readonly configData: ConfigModel = this.PrapreReadData();

  constructor(private encryptionService: EncryptionService) {
   
  }


  GetHomePageConfig(): VisiblehomePageItem {
    return this.configData.visiblehomePageItem;
  }
  GetMenuItems(): MenuItem[] {
    return this.configData.MenuItems;
  }

  PrapreReadData(): ConfigModel {
    // let stringData: string = this.encryptionService.decryptUsingTripleDES(encryptedData);
    // let config: ConfigModel = JSON.parse(stringData);
     let config: ConfigModel = encryptedData;
    return config;
  }
  PrepareWriteData(){
    let encryptedString = this.encryptionService.encryptUsingTripleDES(this.configData,true);
     
  }
}
