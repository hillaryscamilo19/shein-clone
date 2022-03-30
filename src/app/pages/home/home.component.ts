import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  @Input() data: any;
  public rutas: Array<any> = [];
  public imagen: Array<any> = [];
  public foto!: string;

  constructor() {}

  ngOnInit(): void {
    this.foto = '../../../assets/img/IMG.png';
 

    this.rutas = [
      {
        name: 'HOME',
        ruta: '/',
      },
      {
        name: 'ABOUT US',
        ruta: '/about',
      },
      {
        name: 'SHOP',
        ruta: '/shop',
      },
      {
        name: 'CONTACT',
        ruta: '/contact',
      },
    ];
    this.imagen = [
      {
        img: '../../../assets/img/Jaket1.png',
        name: 'Casual Jaket',
        price: '$125',
      },
      {
        img: '../../../assets/img/Jaket2.png',
        name: 'black jacket',
        price: '$550',
      },
      {
        img: '../../../assets/img/jaket3.png',
        name: ' pink jacket',
        price: '$350',
      },
    ];
  }
  clicked(): void {

  }
}