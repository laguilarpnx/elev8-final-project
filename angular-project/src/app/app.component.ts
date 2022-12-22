import { Component } from '@angular/core';
import { interval } from 'rxjs';
import { takeWhile } from 'rxjs/operators';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-project';
  isBudgetSet = false;
  isEditRegistryEnabled = false;
  registroID: any;
  registroNombre: any;
  registroCategoria: any;
  registroMonto: any;
  
  
  ngOnInit(){
    localStorage.clear();
    this.checkIsBudgetSet();
    this.checkIsEditRegistryEnabled();
  }

  setID(value: any) {
    this.registroID = value;
  }

  setNombre(value: any) {
    this.registroNombre = value;
  }

  setMonto(value: any) {
    this.registroMonto = value;
  }
  
  setCategoria(value: any) {
    this.registroCategoria = value;
  }

  checkIsBudgetSet(){
    interval(1000)
    .pipe(takeWhile(() => !this.isBudgetSet))
    .subscribe(() => {
      this.isBudgetSet = localStorage.getItem('isBudgetSet') == "true";
    });
  }

  checkIsEditRegistryEnabled(){
    interval(1000)
    .subscribe(() => {
      this.isEditRegistryEnabled = localStorage.getItem('isEditRegistryEnabled') == "true";
    });
  }
}

