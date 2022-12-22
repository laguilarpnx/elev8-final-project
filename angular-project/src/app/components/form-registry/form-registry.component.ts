import { Component, EventEmitter, Inject, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { interval } from 'rxjs';
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
  expensedAmount: number;
  
  @Output() registroID = new EventEmitter<any>();
  @Output() registroNombre = new EventEmitter<any>();
  @Output() registroCategoria = new EventEmitter<any>();
  @Output() registroMonto = new EventEmitter<any>();

  isBudgetSet: boolean | undefined;
  isEditRegistryEnabled: boolean | undefined;

  constructor(
    private budgetService: BudgetService,
  ) {
    this.expensedAmount = 0;
   }

  ngOnInit(): void {
   this.getRegistros();
  }

  getRegistros(){
    this.budgetService.getAllRegistries().subscribe((allRegistros: any) => {
      this.registros = allRegistros;
      this.getGastosTotales();
    });
}

  agregarRegistro() {
    const formValues = this.addForm.value;
    this.budgetService.addRegistry(formValues);
    this.expensedAmount = Number(localStorage.getItem('expensedAmount'));
    this.expensedAmount += formValues.monto;
    localStorage.setItem('expensedAmount', `${this.expensedAmount}`);
  }

  editRegistry(element:any) {
    this.registroID.emit(element.id);
    this.registroNombre.emit(element.nombre);
    this.registroCategoria.emit(element.categoria);
    this.registroMonto.emit(element.monto);

    localStorage.setItem('isEditRegistryEnabled', 'true');
  }

  deleteRegistry(element:any){
    this.expensedAmount = Number(localStorage.getItem('expensedAmount')) - element.monto;
    localStorage.setItem('expensedAmount', `${this.expensedAmount}`)
    this.budgetService.deleteRegistry(element);
    this.getRegistros();
  }

  getGastosTotales(){
    this.registros.forEach(registro => {
      this.expensedAmount += Number(registro.monto);
    });
    localStorage.setItem('expensedAmount', `${this.expensedAmount}`);
  }

  updateRegister(){
    interval(1000)
    .subscribe(() => {
      this.isBudgetSet = localStorage.getItem('isBudgetSet') == "true";
      this.isEditRegistryEnabled = localStorage.getItem('isEditRegistryEnabled') == "false";
      if(this.isBudgetSet && this.isEditRegistryEnabled){
        this.getRegistros();
      }
    });
  }
}

