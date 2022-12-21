import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BudgetService } from 'src/app/services/budget.service';

@Component({
  selector: 'app-form-registry',
  templateUrl: './form-registry.component.html',
  styleUrls: ['./form-registry.component.css']
})
export class FormRegistryComponent {
  @ViewChild('nuevoRegistro') addForm!: NgForm;
  displayedColumns: string[] = ['registro', 'acciones'];
  registros!: any[];

  constructor(private budgetService: BudgetService ) { }

  ngOnInit(): void {
   this.getRegistros();
  }

  getRegistros(){
    this.budgetService.getAllRegistries().subscribe((allRegistros) => {
      this.registros = allRegistros;
      console.log(allRegistros)
    });
}

  agregarRegistro() {
    const formValues = this.addForm.value;
    this.budgetService.addRegistry(formValues)
    .catch((error) => console.error(error));
  }

  editRegistry() {
    localStorage.setItem('isEditRegistryEnabled', 'true');
  }

  deleteRegistry(registryID:any){
    this.budgetService.deleteRegistry(registryID);
    this.getRegistros();
  }

}
