import { Component, OnInit, ViewChild } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  ValidationErrors,
  Validators,
  NgForm
} from '@angular/forms';
import { BudgetService } from 'src/app/services/budget.service';
import {firstValueFrom} from 'rxjs';
import {
  collectionData,
} from '@angular/fire/firestore';
@Component({
  selector: 'app-form-budget',
  templateUrl: './form-budget.component.html',
  styleUrls: ['./form-budget.component.css'],
})
export class FormBudgetComponent implements OnInit {  
  budgetForm = new FormControl('', [
    Validators.required,
    Validators.pattern('^[1-9]\\d*$'),
  ]);

  budgetAmount!: number;
  
  constructor(private budgetService: BudgetService) {}
  
  ngOnInit(): void {
  }

  numberValidator(): Validators {
    let regex = /^\d*[1-9]\d*$/;
    return (control: AbstractControl): ValidationErrors | null => {
      const num = regex.test(control.value);
      return num ? { numVal: { value: control.value } } : null;
    };
  }

  updateBudget(budgetAmount: any) {  
    if (budgetAmount > 0){
      this.budgetService.getBudget().then((response: any) => {
        if(response[0] != null && response[0].budget != undefined){
          response[0].budget = budgetAmount;
          this.budgetService.updateBudget(response[0])
            .then(() => {
              localStorage.setItem('isBudgetSet', 'true');
            })
            .catch((error) => console.error(error));
        }else {
          this.budgetService.addBudget(budgetAmount)
            .then(() => {
              localStorage.setItem('isBudgetSet', 'true');
            })
            .catch((error) => console.error(error));
        }
      });      
    }

  }
}
