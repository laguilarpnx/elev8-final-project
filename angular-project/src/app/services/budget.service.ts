import { Injectable } from '@angular/core';
import {
  Firestore,
  addDoc,
  collection,
  getDocs,
  query,
  where,
} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})

export class BudgetService {

  constructor(private firestore: Firestore) { }

  getBudget() {

  }

  updateBudget() {

  }


  addRegistry() {

  }

  getAllRegistries() {

  }

  editRegistry(registryId: number) {

  }

  deleteRegistry(registryId: number) {
     
  }


}
