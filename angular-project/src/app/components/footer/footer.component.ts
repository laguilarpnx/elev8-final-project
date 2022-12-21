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
    this.checkIsBudgetSet();
  }

  getBudget() {
    this.budgetService.getBudget().subscribe({
      next: (response: any) => {
        this.presupuesto = response[0].budget;
        this.balance = this.presupuesto - this.gastosTotales;
      },
      error: (error: any) => {
        console.error(error);
      },
    });
  }

  checkIsBudgetSet(){
    interval(1000)
    .pipe(takeWhile(() => !this.isBudgetSet))
    .subscribe(() => {
      this.isBudgetSet = localStorage.getItem('isBudgetSet') == "true";
      if(this.isBudgetSet){
        this.getBudget();
      }
    });
  }
}

