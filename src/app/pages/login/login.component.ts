import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  public title: string;
  public titleLogin: boolean;
  public msgUsuario: string;

  public user: string;
  public password: string;
  public validatePass: boolean;
  public validateUser: boolean;

  constructor(
    private _titleService: Title,
  ) {
    _titleService.setTitle('Login');
    this.title = 'Login';
    this.titleLogin = true;
    this.msgUsuario = '';
    this.user = '';
    this.password = '';
    this.validatePass = false;
    this.validateUser = false;
  }

  ngOnInit(): void {
  }


  public sendLogin(): void {

    if (this.user.trim().length > 0) {
      this.validateUser = false;
    } else {
      this.validateUser = true;
    }

    if (this.password.length > 5) {
      this.validatePass = false;
    } else {
      this.validatePass = true;
    }
  }

  public validateEmail(event: any): void {
    const valueInput: string = event.target.value;
    this.msgUsuario = valueInput.trim();
  }

  public getUsersService(): void {
    //console.log('Usuarios: ' + JSON.stringify(this.pruebaService.getUsers()));
  }


  //Setter to change page's title althrough Browser Module
  public setTitle(newTitle: string) {
    this._titleService.setTitle(newTitle);
  }
}
