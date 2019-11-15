import { Component, OnInit, Inject } from '@angular/core';
import * as firebase from 'firebase';
import { AngularFireStorage } from 'angularfire2/storage';
import { ItemService } from 'src/app/services/item.service';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-save-location-dialog',
  templateUrl: './save-location-dialog.component.html',
  styleUrls: ['./save-location-dialog.component.scss']
})
export class SaveLocationDialogComponent implements OnInit {
  items: any[];
  selectedOption: string;
  selectedFile = null;
  extensions = ['jpg', 'jpeg', 'png'];
  constructor(private storage: AngularFireStorage, private itemService: ItemService, @Inject(MAT_DIALOG_DATA) public dataFromLocation: any) { }

  ngOnInit() {
    this.items=[{id: 1,name: "Muzeu"},{id: 2,name: "Clădire"}, {id: 3, name: "Parc"}]
  }

  saveChanges = () => {
    let name = (<HTMLInputElement> document.getElementById("name")).value ;
    let description = (<HTMLInputElement> document.getElementById("description")).value ;
    if(this.selectedFile){
       var storageRef = firebase.storage().ref(this.selectedFile.name);
    }
    let file = this.selectedFile;
    let extensie = file.name.split('.')[1];
    if(this.extensions.includes(extensie)){
      storageRef.put(file);
    }
    else{
      window.alert('Nu este suportat acest tip de fișier');
    }
    this.itemService.onSubmit({lat: this.dataFromLocation.lat, lng: this.dataFromLocation.lng, name: name, description: description, type: this.selectedOption})
    
    
    storageRef.put(file).then(function(snapshot){
      console.log("A mers");
    })
    .catch(function() {
      console.log("Ceva nu a mers!");
      
    });
    
  }
  
  onFileSelected = (event) => {
    let saveButton = document.getElementById("save");
    this.selectedFile = event.target.files[0];
    let file = this.selectedFile;
    let extensie = file.name.split('.')[1];
    if(!this.extensions.includes(extensie)){
      window.alert('Nu este permis acest format de fișier!');
    }
    else{
      saveButton.style.display = "inline";
    }
  }
  


}
