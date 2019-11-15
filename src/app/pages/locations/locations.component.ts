import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../services/item.service';
import { Item } from '../../models/Item';
import { MatDialog } from '@angular/material';
import { SaveLocationDialogComponent } from 'src/app/components/save-location-dialog/save-location-dialog.component';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.scss']
})

export class LocationsComponent implements OnInit {
  initlat: number = 47.157578637636874;
  initlon: number = 27.60085419040172;
  zoom: number = 12;
  maxZoom: number = 15;
  minZoom: number = 11;
  items: Item[];
  newLat: number;
  newLng: number;
  locationChosen = false;  

  coords = [
    {lat: 45,lon: 45},
    {lat: 60,lon: 60}
  ]

  constructor(private itemService: ItemService,public dialog: MatDialog) { }

  ngOnInit() {
    this.itemService.getItems().subscribe(items => {
      this.items = items;
      console.log(this.items);
      console.log(items);
    });

  }
  
  chooseNewLocation = (event) => {
    this.newLat = event.coords.lat;
    this.newLng = event.coords.lng;
    this.locationChosen = true;
    let cancelButton = document.getElementById("cancel");
    let addButton = document.getElementById("add");
    cancelButton.style.display = "inline";
    addButton.style.display = "inline";
        // this.items.push({latitude: event.coords.lat,
    //                  longitude: event.coords.lng})
  }

  cancelOperation = () => {
    let cancelButton = document.getElementById("cancel");
    let addButton = document.getElementById("add");
    cancelButton.style.display = "none";
    addButton.style.display = "none";
    this.newLat = 0;
    this.newLng = 0;
  }

  openDialog = () => {
    let dialogRef = this.dialog.open(SaveLocationDialogComponent,{data: {
      lat: this.newLat,
      lng: this.newLng
    }});

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      if(result == 'true'){
        console.log("A mers");
      }
    })
  }

}
declare var google;
