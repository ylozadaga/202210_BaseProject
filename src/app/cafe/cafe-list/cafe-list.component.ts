import { Component, OnInit } from '@angular/core';
import { Cafe } from '../cafe';
import { CafeService } from '../cafe.service';

@Component({
  selector: 'app-cafe-list',
  templateUrl: './cafe-list.component.html',
  styleUrls: ['./cafe-list.component.css']
})
export class CafeListComponent implements OnInit {

  cafes: Array<Cafe> = [];

  constructor(private cafeService: CafeService) { }

  getCafes(): void{
    let origin: HTMLElement= document.getElementById("origin")!;
    let blend: HTMLElement= document.getElementById("blend")!;
    this.cafeService.getCafes().subscribe((cafes) => {
      this.cafes = cafes;
      let originCount = this.cafes.filter(c => (c.tipo.match("Café de Origen"))).length.toString();
      let blendCount = this.cafes.filter(c =>(c.tipo.match("Blend"))).length.toString();
      origin.textContent = "Total Café de origen: "+ originCount;
      blend.textContent = "Total Café Blend: "+ blendCount;
    });
    origin.textContent = this.cafes.map(c=>(c.tipo.match("Blend"))).length.toString();
  }

  ngOnInit() {
    this.getCafes();
  }

}
