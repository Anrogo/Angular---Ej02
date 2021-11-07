import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { OfertaModel } from 'src/app/models/oferta.model';
import { OfertasService } from 'src/app/services/ofertas.service';


@Component({
  selector: 'app-nueva-oferta',
  templateUrl: './nueva-oferta.component.html',
  styleUrls: ['./nueva-oferta.component.css']
})
export class NuevaOfertaComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private _ofertasService: OfertasService,
    private _titleService: Title,
    private router: Router,
  ) {
    this._titleService.setTitle('Nueva oferta');
   }

   ofertaForm = this.fb.group({
      titulo: ['', Validators.compose([ Validators.minLength(10), Validators.maxLength(100)])],
      descripcion: ['', Validators.compose([ Validators.minLength(10), Validators.maxLength(300)])],
      empresa: ['', Validators.compose([ Validators.maxLength(50)])],
      salario: ['', Validators.required],
      ciudad: ['', Validators.compose([ Validators.maxLength(50)])],
      email: ['', Validators.compose([Validators.email, Validators.required])],
      checkbox: ['', Validators.requiredTrue]
    });

  ngOnInit(): void {
  }

  onSubmit(): void {
    this._ofertasService.registerOferta(this.generateNuevaOferta())
    .subscribe(
      respuesta => {
        console.log(JSON.stringify(respuesta));
        this.router.navigate(['/home/ofertas-admin']);
      }, 
      error => {
        console.log(JSON.stringify(error));
      });
  }

  public generateNuevaOferta(): OfertaModel {
    let value: OfertaModel = new OfertaModel();
    value.titulo = this.ofertaForm.value.titulo;
    value.descripcion = this.ofertaForm.value.descripcion;
    value.empresa = this.ofertaForm.value.empresa;
    value.salario = this.ofertaForm.value.salario;
    value.ciudad = this.ofertaForm.value.ciudad;
    value.email = this.ofertaForm.value.email;
    return value;
  }

}
