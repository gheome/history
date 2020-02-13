import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { LogoutAction } from '../../../auth/store/actions/login.actions';
import { loginDataSelector } from '../../../auth/store/selectors/login.selector';
import { Router, ActivatedRoute } from '@angular/router';
import { GetCatAction } from '../../store/actions/dashboard.actions';
import { DashboardEffects } from '../../store/effects/dashboard.effects';
import { catsDataUrls } from '../../store/selectors/dashboard.selector';
import { AuthService } from '../../../auth/services/auth/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public urls: string[] = [];
  public isLogged: boolean;

  constructor(public store: Store<any>, public router: Router, public auth: AuthService, public route: ActivatedRoute) { }

  ngOnInit() {
    this.store.select(loginDataSelector).subscribe((response: any) => {
      if (sessionStorage.getItem('user') !== null) {
      this.isLogged = JSON.parse(sessionStorage.getItem('user')).isLogged;
      }
    });

    if (this.isLogged) {
      this.router.navigate(['/dashboard']);
    } else {
      sessionStorage.clear();
      if (sessionStorage.getItem('user') === null) {
        this.router.navigate(['/login']);
      }
    }

    this.store.select(catsDataUrls).subscribe((data: any) => {
      if (data) {
        console.log(data);
        if (data.length === 4) {
          this.urls = data;
        }
      }
    });
  }
  public logout(): void {
    this.store.dispatch(new LogoutAction());
    sessionStorage.clear();
    this.auth.loggedIn = false;
    this.router.navigate(['/login']);
  }

  public showCat(): void {
    let i = 0;
    while (i < 4) {
      this.store.dispatch(new GetCatAction());
      i++;
    }
  }

  public deleteCat(): void {
    this.urls = [];
  }
}
