import { Component } from '@angular/core';
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, onValue } from "firebase/database";

@Component({
  selector: 'app-form-budget',
  templateUrl: './form-budget.component.html',
  styleUrls: ['./form-budget.component.css']
})

export class FormBudgetComponent {
  database;
  totalAmount: number = 0;
  budgetId : number = 1;

  constructor(){
    let firebaseConfig = {
      apiKey: "AIzaSyAs4rLx5G6Tr244pcFkMDWmTHPX5TpikHk",
      authDomain: "budgetngapp.firebaseapp.com",
      projectId: "budgetngapp",
      storageBucket: "budgetngapp.appspot.com",
      messagingSenderId: "713637563778",
      appId: "1:713637563778:web:3520417e5fa028213b939b",
      measurementId: "G-F7CNDB98LP"
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

    // Initialize Realtime Database and get a reference to the service
    this.database = getDatabase(app);

    // Loads the budget when the component is loaded.
    this.readBudget()

  }

  insertBudget() {
    this.totalAmount = 100;

    set(ref(this.database, 'budgets/' + this.budgetId), {
      budgetAmount: this.totalAmount,
    });

    alert("Presupuesto registrado exitosamente")
  }

  readBudget(){
    const starCountRef = ref(this.database, 'budgets/' + this.budgetId);
    onValue(starCountRef, (snapshot) => {
    this.totalAmount = snapshot.val().budgetAmount;
    });
  }
}
