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
  updateDoc
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
    return getDocs(docRef);
  }

  addBudget(amount: number) {
    const docRef = collection(this.firestore, `${this.databaseRegistroRef}/${1}`);
    return addDoc(docRef, {"budget": `${amount}`});
  }

  updateBudget(budgetAmount: any){
    const docRef = doc(this.firestore, `${this.databaseRegistroRef}/${1}`);
    return setDoc(docRef, {"budget": `${budgetAmount}`});
  }
  
  async addRegistry(newRegistry: any) {
    const { nombre, monto, categoria } = newRegistry;
    //const docRef = collection(this.firestore, this.databaseTransaccionesRef);
    
    const newRegistryRef = doc(collection(this.firestore, this.databaseTransaccionesRef));

    await setDoc(newRegistryRef, {nombre, monto, categoria, id: 0});

    await updateDoc(newRegistryRef, {
      id: newRegistryRef.id
    });

    //return addDoc(docRef, newRegistry);
  }

  getAllRegistries() {
    const docRef = collection(this.firestore, this.databaseTransaccionesRef);
    return collectionData(docRef);
  }

  editRegistry(newRegistry: any) {
    const docRef = doc(this.firestore, this.databaseTransaccionesRef, newRegistry.id);
    updateDoc(docRef, {...newRegistry})
  }

  deleteRegistry(element: any) {
    const docRef:any = doc(this.firestore, this.databaseTransaccionesRef, element.id);
    return deleteDoc(docRef);
  }

}
