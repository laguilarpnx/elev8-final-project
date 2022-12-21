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
  
  ngOnInit(){
    localStorage.clear();
    this.checkIsBudgetSet();
    this.checkIsEditRegistryEnabled();
  }

  checkIsBudgetSet(){
    interval(1000)
    .pipe(takeWhile(() => !this.isBudgetSet))
    .subscribe(() => {
      this.isBudgetSet = localStorage.getItem('isBudgetSet') == "true";
    });
  }

  checkIsEditRegistryEnabled(){
    interval(2000)
    .subscribe(() => {
      this.isEditRegistryEnabled = localStorage.getItem('isEditRegistryEnabled') == "true";
    });
  }
}

