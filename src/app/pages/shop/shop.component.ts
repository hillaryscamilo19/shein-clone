import { Component, OnInit, Input } from '@angular/core';
import { ServiciosaddService } from 'src/app/pages/shop/services/serviciosadd.service';
// import * as dataRaw from '../shop/data/store.json';
import {IProducto} from './data/store';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css'],
})
export class ShopComponent implements OnInit {
  listProduct: IProducto [] = [];
  filter = '';
  @Input() data: any;
  @Input() producto!: ShopComponent; 
  Data: IProducto[] = []
  showFiller = false;


  zapatos = this.Data.filter((zapato) => zapato.object === 'zapato');
  vestidos = this.Data.filter((vestido) => vestido.object === 'vestido');
  abrigos = this.Data.filter((abrigo) => abrigo.object === 'abrigo');
  pantalones = this.Data.filter((pantalon) => pantalon.object === 'pantalon');

  constructor(private productoservis: ServiciosaddService) {}


  ngOnInit(): void {
    this.getProduct();
    
  }

  //backed
  getProduct(){
    this.productoservis.getProducto().subscribe(data =>{
      console.log(data);
      this.listProduct = data;
    }, error => {
      console.log(error);
    })
  }

  addCar(shop: any): void{
    this.productoservis.getData(shop);
    localStorage.setItem('session', JSON.stringify(this.Data))
    console.log(this.Data)
  }
}

