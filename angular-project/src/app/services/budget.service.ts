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
  updateDoc,

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
  
  addRegistry(newRegistry: any) {
    const { categoria, monto, nombre } = newRegistry;
    const docRef = collection(this.firestore, this.databaseTransaccionesRef);
    const newTransaccionRef =  doc(collection(this.firestore, "transacciones"));
    setDoc(newTransaccionRef, {categoria, monto, nombre, id: 0,});

    setDoc(docRef, );    
    updateDoc(docRef, { "id": docRef.id, });
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
