import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Router } from '@angular/router';
import { LogoutAction } from '../../../auth/store/actions/login.actions';
import { AuthService } from '../../../auth/services/auth/auth.service';
import { logoutSelector } from '../../store/selectors/logout.selector';
import { loginDataSelector } from '../../../auth/store/selectors/login.selector';
import { RequestUser, UserActionPayload } from '../../store/models/request-user.model';
import { of } from 'rxjs';
import { DeleteUserAction, EnableUserAction, DisableUserAction, DeleteUserSuccessAction } from '../../store/actions/user-request.actions';
import { userRequestDataSelector } from '../../store/selectors/user-request.selector';
import { AngularFirestore } from 'angularfire2/firestore';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  public test = '';
  public usersRequests = [];
  public isLogged: boolean;
  public messages: any;

  constructor(
    private store: Store<any>,
    private router: Router,
    private auth: AuthService,
    private afs: AngularFirestore
    ) { }

  public ngOnInit(): void {

    this.store.select(loginDataSelector).subscribe((response: any) => {
      console.log(response);
      if (sessionStorage.getItem('user') !== null) {
        this.isLogged = JSON.parse(sessionStorage.getItem('user')).isLogged;
      }
    });

    this.afs.collection('contact').valueChanges().subscribe((messages) => {
      this.messages = messages;
      console.log(this.messages);
    });

    if (this.isLogged) {
      this.router.navigate(['/users']);
    } else {
      sessionStorage.clear();
      if (sessionStorage.getItem('user') === null) {
        this.router.navigate(['/login']);
      }
    }

    this.store.select(userRequestDataSelector).subscribe((response: UserActionPayload) => {
      if (response.email && response.enable === true) {
        let userObj: any = JSON.parse(localStorage.getItem(response.email));
        userObj.approved = true;
        userObj = JSON.stringify(userObj);
        localStorage.setItem(response.email, userObj);
        this.usersRequests.forEach(element => {
          if (element.email === response.email) {
            element.approved = true;
          }
        });

      } else {
        if (response.email && response.enable === false && response.delete === false) {
          let userObj: any = JSON.parse(localStorage.getItem(response.email));
          userObj.approved = false;
          userObj = JSON.stringify(userObj);
          localStorage.setItem(response.email, userObj);
          this.usersRequests.forEach(element => {
            if (element.email === response.email) {
              element.approved = false;
            }
          });
          console.log(localStorage);
        } else {
          if (response.email && response.delete === true && response.enable === false) {
            console.log('Am ajuns la stergere fara sa fac nimic!');
            localStorage.removeItem(response.email);
            this.usersRequests = this.usersRequests.filter((value) => value.email !== response.email);
            this.store.dispatch(new DeleteUserSuccessAction());
          }
        }
      }
    });
    console.log(this.usersRequests);
    for (let i = 0; i < localStorage.length; i++) {
      this.usersRequests.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
    }
  }
  public logout(): void {
    this.store.dispatch(new LogoutAction());
    sessionStorage.clear();
    this.auth.loggedIn = false;
    this.router.navigate(['/login']);
  }

  public deleteUser(user: RequestUser): void {
    this.store.dispatch(new DeleteUserAction(user.email));
  }

  public enableUser(user): void {
    this.store.dispatch(new EnableUserAction(user.email));
  }

  public disableUser(user): void {
    this.store.dispatch(new DisableUserAction(user.email));
  }
}
