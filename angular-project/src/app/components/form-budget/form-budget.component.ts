import { Component, OnInit } from '@angular/core';
import { BudgetService } from 'src/app/services/budget.service';

@Component({
  selector: 'app-form-budget',
  templateUrl: './form-budget.component.html',
  styleUrls: ['./form-budget.component.css']
})
export class FormBudgetComponent implements OnInit {

  constructor(private budgetService: BudgetService) {

  }

  ngOnInit(): void {
  }

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
