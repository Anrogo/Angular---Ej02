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
    //Check if user field is empty and advise it
    if (this.user.trim().length > 0) {
      this.validateUser = false;
    } else {
      this.validateUser = true;
    }
    //Check if password field is empty and advise it
    if (this.password.trim().length > 5) {
      this.validatePass = false;
    } else {
      this.validatePass = true;
    }
  }

  public validateEmail(event: any): void {
    const valueInput: string = event.target.value;
    this.msgUsuario = valueInput.trim();
  }
}
