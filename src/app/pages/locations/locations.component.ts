import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../services/item.service';
import { Item } from '../../models/Item';

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

  coords = [
    {lat: 45,lon: 45},
    {lat: 60,lon: 60}
  ]
  constructor(private itemService: ItemService) { }

  ngOnInit() {
    this.itemService.getItems().subscribe(items => {
      this.items = items;
      console.log(this.items);
      console.log(items);
    });

  }

  showInfo = (event) => {
    console.log(event);
  }

}
