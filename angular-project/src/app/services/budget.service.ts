import { Injectable } from '@angular/core';
import {
  Firestore,
  addDoc,
  collection,
  collectionData,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  query,
  setDoc,
  where,

} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})

export class BudgetService {
  databaseRef = 'registros';

  constructor(private firestore: Firestore) { }

  getBudget() {
    const docRef = collection(this.firestore, this.databaseRef);
    return collectionData(docRef);
  }

  updateBudget(amount: number) {
    const docRef = collection(this.firestore, this.databaseRef);
    return addDoc(docRef, {budget: amount});
  }

  addRegistry(newRegistry: any) {
    const docRef = collection(this.firestore, this.databaseRef);
    return addDoc(docRef, newRegistry);
  }

 /* getAllRegistries() {
  }*/

  editRegistry(newRegistry: any) {
    const docRef = doc(this.firestore, `${this.databaseRef}/${newRegistry.id}`);
    return setDoc(docRef, {...newRegistry})
  }

  deleteRegistry(registry: any) {
    const docRef:any = collection(this.firestore, `${this.databaseRef}/${registry.id}`);
    return deleteDoc(docRef);
  }


}
