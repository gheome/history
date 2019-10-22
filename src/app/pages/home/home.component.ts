import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  i:number = 0;


  constructor() { }

  ngOnInit() {
  }

  read(){
    var dots = document.getElementById("dots");
    var more = document.getElementById("more");
    var button = document.getElementById("read");
    if( !this.i ){
      dots.style.display = "none";
      more.style.display = "inline";
      button.innerHTML = "Citește mai puțin";
      this.i = 1;
    }
    else{
      dots.style.display = "inline";
      more.style.display = "none";
      button.innerHTML = "Citește mai mult";
      this.i = 0;
    }
  }  

}
