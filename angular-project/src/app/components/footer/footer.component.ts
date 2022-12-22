import { Component, OnInit } from '@angular/core';
import { BudgetService } from './../../services/budget.service'
import { interval } from 'rxjs';
import { takeWhile } from 'rxjs/operators';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  presupuesto: number;
  gastosTotales: number;
  balance: number;
  isBudgetSet: boolean;

  constructor( private budgetService: BudgetService) {
    this.presupuesto = 0;
    this.gastosTotales = 0;
    this.balance = 0;
    this.isBudgetSet = false;
  }

  ngOnInit(){
    this.checkBudgetSet();
  }

  checkBudgetSet(){
    interval(500)
    .subscribe(() => {
      this.isBudgetSet = localStorage.getItem('isBudgetSet') == "true";
      if(this.isBudgetSet){
        this.presupuesto = Number(localStorage.getItem('budgetAmount'));
        this.gastosTotales = Number(localStorage.getItem('expensedAmount'));
        this.balance = this.presupuesto - this.gastosTotales;
      }
    });
  }
}

