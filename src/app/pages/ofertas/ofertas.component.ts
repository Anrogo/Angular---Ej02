import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { HomeService } from 'src/app/services/home.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-oferta',
  templateUrl: './ofertas.component.html',
  styleUrls: ['./ofertas.component.css'],
  providers: [HomeService, LoginService]
})
export class OfertasComponent implements OnInit {

  public ofertasArray: Array<any>;

  constructor(
    private _titleService: Title,
    private _homeService: HomeService,
    private router: Router,
  ) {
    //Title:
    this._titleService.setTitle('Ofertas - Admin');

    //Data Array:
    this.ofertasArray = [];
  }

  ngOnInit(): void {
    //Get data
    this.getOfertas();
  }

  //View all data
  public getOfertas(): void {
    this._homeService.getOfertas().subscribe(
      response => {
        this.ofertasArray = response;
      },
      error => {
        console.log('Error ' + JSON.stringify(error));
      }
    );
  }

  //View details of register with id
  public goToOfertaDetail(id: number): void {
    this.router.navigate(['/home/ofertas/', id])
  }

  public OfertaDelete(id: number): void {
    //Remove of the register with id through Home service
  }

}
