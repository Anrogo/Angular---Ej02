import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { LoginModel } from 'src/app/models/login.model';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  enviado: boolean = false;
  isLoading: boolean = false;
  errorMsg!: string | null;

  constructor(
    private _titleService: Title,
    private formBuilder: FormBuilder,
    private _loginService: LoginService,
    private route: Router,
  ) {
    this._titleService.setTitle('Login');
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }


  // Ejecuta la acción de login
  submitForm(): void {
    this.enviado = true;
    // Si no es válido, no hago nada
    if(!this.loginForm.valid) {
      return;
    } else {
      //Activo el spinner de cargando:
      this.isLoading = true;
      //Y si es válido llamamos al servicio de login:
      this._loginService.performLogin(
        new LoginModel(
          this.loginForm.controls.username.value,
          this.loginForm.controls.password.value,
          ''))
      .subscribe(
        respuesta => {
        console.log(JSON.stringify(respuesta));
        this.errorMsg = null;
        this.isLoading = false;
      },
      error => {
        console.log(JSON.stringify(error));
        this.errorMsg = `⚠️ ¡No se ha podido iniciar la sesión! ${error?.error?.error}`;
        this.isLoading = false;
      });
    }
  }
}
