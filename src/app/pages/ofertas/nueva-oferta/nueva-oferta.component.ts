import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Oferta } from 'src/app/models/oferta';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-nueva-oferta',
  templateUrl: './nueva-oferta.component.html',
  styleUrls: ['./nueva-oferta.component.css'],
  providers: [RegisterService]
})
export class NuevaOfertaComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private _registerService: RegisterService,
    private _titleService: Title,
  ) {
    this._titleService.setTitle('Nueva oferta');
   }

   ofertaForm = this.fb.group({
      titulo: ['', Validators.compose([Validators.required, Validators.minLength(10), Validators.maxLength(100)])],
      descripcion: ['', Validators.compose([Validators.required, Validators.minLength(10), Validators.maxLength(300)])],
      empresa: ['', Validators.compose([Validators.required, Validators.maxLength(50)])],
      salario: ['', Validators.required],
      ciudad: ['', Validators.compose([Validators.required, Validators.maxLength(50)])],
      email: ['', Validators.compose([Validators.email, Validators.required])],
      checkbox: ['', Validators.requiredTrue]
    });

  ngOnInit(): void {
  }

  onSubmit(): void {
    this._registerService.sendNuevaOferta(this.generateNuevaOferta());
  }

  public generateNuevaOferta(): Oferta {
    let value: Oferta = new Oferta();
    value.titulo = this.ofertaForm.value.titulo;
    value.descripcion = this.ofertaForm.value.descripcion;
    value.empresa = this.ofertaForm.value.empresa;
    value.salario = this.ofertaForm.value.salario;
    value.ciudad = this.ofertaForm.value.ciudad;
    value.email = this.ofertaForm.value.email;
    return value;
  }

}
