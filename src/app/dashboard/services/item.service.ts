import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Item } from '../models/Item';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  itemsCollection: AngularFirestoreCollection<Item>;
  items: Observable<Item[]>;
  constructor(public afs: AngularFirestore) {
    this.items = this.afs.collection('locations').valueChanges();
   }

getItems(){
  return this.items;
}

onSubmit(data) {
  this.afs.collection('locations').doc(data.name).set({
    latitude:data.lat,
    longitude: data.lng,
    description: data.description,
    type: data.type,
    name: data.name,
    path: data.path
  });
}

}

