import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BudgetService } from 'src/app/services/budget.service';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-form-registry',
  templateUrl: './form-registry.component.html',
  styleUrls: ['./form-registry.component.css']
})
export class FormRegistryComponent {
  @ViewChild('nuevoRegistro') addForm!: NgForm;
  displayedColumns: string[] = ['registro', 'acciones'];
  registros!: any[];
  expensedAmount!: number;

  constructor(
    private budgetService: BudgetService
  ) {
    this.expensedAmount = 0;
   }

  ngOnInit(): void {
   this.getRegistros();
  }

  getRegistros(){
    this.budgetService.getAllRegistries().subscribe((allRegistros) => {
      this.registros = allRegistros;
      console.log(allRegistros)
      this.getGastosTotales();
    });
}

  agregarRegistro() {
    const formValues = this.addForm.value;
    this.budgetService.addRegistry(formValues);

    console.log(formValues);
    this.expensedAmount += formValues.monto;
  }

  editRegistry() {
    localStorage.setItem('isEditRegistryEnabled', 'true');
  }

  deleteRegistry(element:any){
    console.log(element)
    this.budgetService.deleteRegistry(element);
    this.getRegistros();
  }

  getGastosTotales(){
    this.registros.forEach(registro => {
      this.expensedAmount += Number(registro.monto);
    });
    localStorage.setItem('expensedAmount', `${this.expensedAmount}`);
  }
/*
  openDialog(registro: any): void {
    const dialogRef = this.dialog.open(FormRegistryEditDialog, {
      data: registro,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }*/
}
/*
@Component({
  selector: 'form-registry-edit-dialog',
  templateUrl: 'form-registry-edit-dialog.html',
})
export class FormRegistryEditDialog {
  constructor(
    public dialogRef: MatDialogRef<FormRegistryEditDialog>,
    @Inject(MAT_DIALOG_DATA) public data: FormRegistryComponent,
  ) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
}*/