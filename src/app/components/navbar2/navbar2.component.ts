import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-navbar2',
  templateUrl: './navbar2.component.html',
  styleUrls: ['./navbar2.component.scss']
})
export class Navbar2Component {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver) {}

  switchMobileMenu:number = 0;
  
  showMobileMenu(){
    var list = document.getElementById("mobileMenu");
    if(!this.switchMobileMenu){
      list.style.display="inline";
      this.switchMobileMenu = 1;
    }
    else{
      list.style.display = "none";
      this.switchMobileMenu = 0;
    }
  }

}
