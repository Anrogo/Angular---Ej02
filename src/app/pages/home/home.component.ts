import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ HomeService]
})
export class HomeComponent implements OnInit {

  public ofertasArray: Array<any>;

  constructor(
    private _homeService: HomeService,
    private router: Router,
    private route: ActivatedRoute,
    private _titleService: Title,
  ) {
    //Title:
    this._titleService.setTitle('Ofertas');

    //Data array:
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

  //Setter to change page's title althrough Browser Module
  public setTitle(newTitle: string) {
    this._titleService.setTitle(newTitle);
  }

}
