import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormControl, ValidationErrors, Validators} from '@angular/forms';
import { BudgetService } from 'src/app/services/budget.service';

@Component({
  selector: 'app-form-budget',
  templateUrl: './form-budget.component.html',
  styleUrls: ['./form-budget.component.css']
})
export class FormBudgetComponent {
  budgetForm = new FormControl('', [Validators.required, Validators.pattern('^[1-9]\\d*$')]);

  ngOnInit(): void {
  }

  numberValidator(): Validators {
    let regex = /^\d*[1-9]\d*$/;
    return (control: AbstractControl): ValidationErrors | null => {
      const num = regex.test(control.value);
      return num ? {numVal: {value: control.value}} : null;
    };
  }

  saveBudget(){
    localStorage.setItem('isBudgetSet', 'true');
  }

  constructor(private budgetService: BudgetService) {}

  get_budget() {
    this.budgetService.getBudget().subscribe({
      next: (response) => {
        console.log(response)      
      },
      error: (error) => {
        console.error(error)      
      }
    })
  }

  // update_budget() {
  //   this.budgetService
  //     .updateBudget({
  //       user: this.usuario.uid,
  //       ...this.formulario.value,
  //     })
  //     .then((new_perfil) => {
  //       console.log(`Submitted profile: ${JSON.stringify(new_perfil)}`);
  //       this.get_perfil();
  //     })
  //     .catch((error) => console.error(error));
  // }
  
}
