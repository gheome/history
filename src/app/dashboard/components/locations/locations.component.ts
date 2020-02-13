import { Component, OnInit, OnDestroy } from '@angular/core';
import { ItemService } from '../../services/item.service';
import { Item } from '../../models/Item';
import { MatDialog } from '@angular/material';
import { SaveLocationDialogComponent } from '../../components/save-location-dialog/save-location-dialog.component';
import { delay } from 'rxjs/operators';
import * as firebase from 'firebase';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.scss'],
  entryComponents: [ ]
})

export class LocationsComponent implements OnInit, OnDestroy {
  initlat = 47.157578637636874;
  initlon = 27.60085419040172;
  zoom = 12;
  maxZoom = 15;
  minZoom = 11;
  items: any;
  newLat: number;
  newLng: number;
  locationChosen = false;

  coords = [
    {lat: 45, lon: 45},
    {lat: 60, lon: 60}
  ];

  constructor(private itemService: ItemService, public dialog: MatDialog) { }

  ngOnInit() {
    console.log('Init');
    setTimeout(() => {}, 2000);
    this.itemService.getItems().subscribe((items: any) => {
      this.items = items;
      this.items.map((el,index) => {
        let fullPath;
        const a = firebase.storage().ref(el.path).getDownloadURL();
        a.then(res => {
          this.items[index].fp = res;
        });
        return ({...el, fp: fullPath});
    });
      console.log(this.items);
    });
  }
    // let a = firebase.storage().ref('Dancu.j').getDownloadURL();
    // a.then((res) => {
    //   console.log(res);
    // });



  chooseNewLocation = (event) => {
    this.newLat = event.coords.lat;
    this.newLng = event.coords.lng;
    this.locationChosen = true;
    const cancelButton = document.getElementById('cancel');
    const addButton = document.getElementById('add');
    cancelButton.style.display = 'inline';
    addButton.style.display = 'inline';
        // this.items.push({latitude: event.coords.lat,
    //                  longitude: event.coords.lng})
  }

  cancelOperation = () => {
    const cancelButton = document.getElementById('cancel');
    const addButton = document.getElementById('add');
    cancelButton.style.display = 'none';
    addButton.style.display = 'none';
    this.newLat = 0;
    this.newLng = 0;
  }

  openDialog = () => {
    const dialogRef = this.dialog.open(SaveLocationDialogComponent, {data: {
      lat: this.newLat,
      lng: this.newLng
    }});

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      if (result === 'true') {
        console.log('It worked');
      }
    });
  }

  ngOnDestroy() {
    console.log('Destroyed');
  }
}
declare var google;
