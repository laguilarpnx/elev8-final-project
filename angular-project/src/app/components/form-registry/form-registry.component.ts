import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form-registry',
  templateUrl: './form-registry.component.html',
  styleUrls: ['./form-registry.component.css']
})
export class FormRegistryComponent {
  @ViewChild('nuevoRegistro') addForm!: NgForm;

  constructor() { }

  ngOnInit(): void {
  }

  agregarRegistro() {
    console.log(this.addForm.value);

  }

}
