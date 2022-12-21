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
  databaseRegistroRef = 'registros';
  databaseTransaccionesRef = 'transacciones';

  constructor(private firestore: Firestore) { }

  getBudget() {
    const docRef = collection(this.firestore, this.databaseRegistroRef);
    const query = where('id', '==', 1);
    return getDocs(docRef);
  }

  addBudget(amount: number) {
    const docRef = collection(this.firestore, this.databaseRegistroRef);
    return addDoc(docRef, {"id": 1, "budget": `${amount}`});
  }

  updateBudget(budget: any){
    const docRef = doc(this.firestore, `${this.databaseRegistroRef}/${1}`);
    return setDoc(docRef, {...budget});
  }
  
  addRegistry(newRegistry: any) {
    const docRef = collection(this.firestore, this.databaseTransaccionesRef);
    return addDoc(docRef, newRegistry);
  }

  getAllRegistries() {
    const docRef = collection(this.firestore, this.databaseTransaccionesRef);
    return collectionData(docRef);
  }

  editRegistry(newRegistry: any) {
    const docRef = doc(this.firestore, `${this.databaseTransaccionesRef}/${newRegistry.id}`);
    return setDoc(docRef, {...newRegistry})
  }

  deleteRegistry(registryID: any) {
    const docRef:any = collection(this.firestore, `${this.databaseTransaccionesRef}/${registryID}`);
    return deleteDoc(docRef);
  }

}
