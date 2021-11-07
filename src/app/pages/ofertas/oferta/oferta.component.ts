import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { OfertaModel } from 'src/app/models/oferta.model';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css']
})
export class OfertaComponent implements OnInit {

  public sub: any;
  public id: any;
  public numSolicitudes: number;

  public oferta = new OfertaModel();

  constructor(
    private _homeService: HomeService,
    private router: Router,
    private route: ActivatedRoute,
    private _titleService: Title
  ) { 
    this.id = 0;
    this.numSolicitudes = 0;
    this._titleService.setTitle('Detalles oferta');
  }

  ngOnInit(): void {
    //Get id and its respective register through the api
    this.sub = this.route.paramMap.subscribe(parms => {
      //console.log('ID oferta: ' + parms.get('id'));
      this.id = parms.get('id');
      this._homeService.getOferta(this.id).subscribe(
        response => {
          //Save data to use in the view
          this.saveOferta(response);
        },
        error => {
          console.log('Error ' + JSON.stringify(error));
        }
      )
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  //Method to save data in a new Oferta object
  public saveOferta(response: any): void {
    this.oferta.titulo = response.titulo.toUpperCase();
    this.oferta.descripcion = response.descripcion;
    this.oferta.email = response.email;
    this.oferta.empresa = response.empresa;
    this.oferta.ciudad = response.ciudad;
    this.oferta.salario = response.salario;
    this.numSolicitudes = Math.floor((Math.random() * (31-5))+5);
    //console.log(this.oferta);
  }
}
