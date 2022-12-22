import { Component, Input, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BudgetService } from 'src/app/services/budget.service';

@Component({
  selector: 'app-form-registry-edit',
  templateUrl: './form-registry-edit.component.html',
  styleUrls: ['./form-registry-edit.component.css']
})

export class FormRegistryEditComponent {
  @ViewChild('editRegistro') editForm!: NgForm;
  @Input() registroID: any;
  @Input() registroNombre: any;
  @Input() registroCategoria: any;
  @Input() registroMonto: any;

  constructor( private budgetService: BudgetService
  ) { }

  ngOnInit(): void {
  }

  cancel(){
    localStorage.setItem('isEditRegistryEnabled', 'false');
  }

  save(){
    localStorage.setItem('isEditRegistryEnabled', 'false');
    const formValues = this.editForm.value;
    formValues.id = this.registroID;
    this.budgetService.editRegistry(formValues);
  }


}