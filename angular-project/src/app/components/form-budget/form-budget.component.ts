import { Component } from '@angular/core';
import {AbstractControl, FormControl, ValidationErrors, Validators} from '@angular/forms';

@Component({
  selector: 'app-form-budget',
  templateUrl: './form-budget.component.html',
  styleUrls: ['./form-budget.component.css']
})
export class FormBudgetComponent {
  budgetForm = new FormControl('', [Validators.required, Validators.pattern('^[1-9]\\d*$')]);


  numberValidator(): Validators {
    let regex = /^\d*[1-9]\d*$/;
    return (control: AbstractControl): ValidationErrors | null => {
      const num = regex.test(control.value);
      return num ? {numVal: {value: control.value}} : null;
    };
  }
}
