import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { LogoutAction } from '../../../auth/store/actions/login.actions';
import { Router } from '@angular/router';
import { AuthService } from '../../../auth/services/auth/auth.service';
import { loginDataSelector } from '../../../auth/store/selectors/login.selector';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit{

  public isLogged: boolean;

  constructor(private store: Store<any>, private router: Router, public auth: AuthService) { }

  public ngOnInit(): void {
    this.store.select(loginDataSelector).subscribe((response: any) => {
      console.log(response);
      if (sessionStorage.getItem('user') !== null) {
        this.isLogged = JSON.parse(sessionStorage.getItem('user')).isLogged;
        console.log(this.isLogged);
      }
    });
    
    if (this.isLogged) {
      //this.router.navigate(['/locations']);
    } else {
      sessionStorage.clear();
      if (sessionStorage.getItem('user') === null) {
        this.router.navigate(['/login']);
      }
    }
  }

  public logout(): void {
    this.store.dispatch(new LogoutAction());
    sessionStorage.clear();
    this.auth.loggedIn = false;
    this.router.navigate(['/login']);
  }

}
