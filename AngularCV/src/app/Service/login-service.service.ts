import { Injectable } from '@angular/core';
import { EncryptionService } from './encryption.service';


@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  private static readonly UserHash:string = "da53e61b6457e6a666778cdbfd3055f3cb6787f929c9340012645231ac19a258";
  private static readonly PassHash:string = "8d6c5597d25eca212ea6c6cacc0a02e247b8c631343a70147cb81374ff72f414";
  private static readonly cookieName:string = "login";
  constructor(private security:EncryptionService) { }

  cookieValidate():boolean{
     let cookie = this.getCookie("login");
     if(!(cookie && cookie.length>5))
         return false;
     return  cookie === LoginServiceService.UserHash
      
  }
  makeCookieLogin(username:string,Remeber:boolean){
    this.setCookie('login',this.security.encrypteSha256(username),Remeber?30:0.5);
  }
  isAdminLogin():boolean{
    return this.cookieValidate();
  }
  
  logout(){
    this.deleteCookie(LoginServiceService.cookieName);
  }
  loginToAdminPage(username:string,password:string){
    let encrypteUsername =this.security.encrypteSha256(username);
    let encryptePassword =this.security.encrypteSha256(password);

    if(encrypteUsername === LoginServiceService.UserHash && 
      encryptePassword == LoginServiceService.PassHash){
        return true;
      }
      return false;
    }

    private getCookie(name: string) {
      let ca: Array<string> = document.cookie.split(';');
      let caLen: number = ca.length;
      let cookieName = `${name}=`;
      let c: string;

      for (let i: number = 0; i < caLen; i += 1) {
          c = ca[i].replace(/^\s+/g, '');
          if (c.indexOf(cookieName) == 0) {
              return c.substring(cookieName.length, c.length);
          }
      }
      return '';
  }

  private deleteCookie(name:string) {
      this.setCookie(name, '', -1);
  }

  private setCookie(name: string, value: string, expireDays: number, path: string = '') {
      let d:Date = new Date();
      d.setTime(d.getTime() + expireDays * 24 * 60 * 60 * 1000);
      let expires:string = `expires=${d.toUTCString()}`;
      let cpath:string = path ? `; path=${path}` : '';
      document.cookie = `${name}=${value}; ${expires}${cpath}`;
  }

}
