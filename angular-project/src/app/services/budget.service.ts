import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, signInWithPopup, GoogleAuthProvider } from '@angular/fire/auth';
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

  constructor() { }

  updateBudget() {

  }

  getBudget() {

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
