import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  presupuesto!: number;
  gastosTotales!: number;
  balance!: number;

  constructor() {
    this.presupuesto = 0;
    this.gastosTotales = 0;
    this.balance = 0;
  }


}

