import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form-registry',
  templateUrl: './form-registry.component.html',
  styleUrls: ['./form-registry.component.css']
})
export class FormRegistryComponent {
  @ViewChild('nuevoRegistro') addForm!: NgForm;
  displayedColumns: string[] = ['registro', 'acciones'];
  dataSource = [
    {
      nombre: "Registro1",
      categoria: "1",
      monto: 150
    },
    {
      nombre : "Registro2",
      categoria: "2",
      monto: 100
    },
    {
      nombre: "Regsitro3",
      categoria: "3",
      monto: 50
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  agregarRegistro() {
    console.log(this.addForm.value);

  }

}
