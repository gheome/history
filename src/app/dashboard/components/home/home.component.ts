import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public i = 0;

  constructor() { }

  ngOnInit() {
  }

  read() {
    const dots = document.getElementById('dots');
    const more = document.getElementById('more');
    const button = document.getElementById('read');
    if (!this.i) {
      dots.style.display = 'none';
      more.style.display = 'inline';
      button.innerHTML = 'Read less';
      this.i = 1;
    } else {
      dots.style.display = 'inline';
      more.style.display = 'none';
      button.innerHTML = 'Read more';
      this.i = 0;
    }
  }
}
