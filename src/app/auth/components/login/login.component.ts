import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { LoginRequestAction } from '../../store/actions/login.actions';
import { loginDataSelector } from '../../store/selectors/login.selector';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;
  public email: string;
  public password: string;

  constructor(
    private auth: AuthService,
    private router: Router,
    private store: Store<any>,
    private route: ActivatedRoute,
    private builder: FormBuilder) { }

  public ngOnInit(): void {

    this.loginForm = this.builder.group({
      email: ['', [Validators.required, ]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });

    this.loginForm.valueChanges.subscribe((response) => {
      console.log(this.email);
      this.email = response.email;
      this.password = response.password;
      console.log(this.loginForm.valid);
    });

    this.store.select(loginDataSelector).subscribe((response: any) => {
      if (response.isLogged) {
        this.auth.setLoggedIn(true);
      } else {
        this.auth.setLoggedIn(false);
      }
      if (this.auth.loggedIn && response.email && response.isAdmin) {
        console.log(response);
        sessionStorage.setItem('user', JSON.stringify({ isAdmin: true, isLogged: true }));
        this.router.navigate(['/users']);
      }
      if (this.auth.loggedIn && response.email && !response.isAdmin) {
        console.log(response);
        sessionStorage.setItem('user', JSON.stringify({ isAdmin: false, isLogged: true }));
        this.router.navigate(['/home'], );
      }
    });
  }

  public loginUser(event): void {
    event.preventDefault();
    this.store.dispatch(new LoginRequestAction({
      email: this.email,
      password: this.password
    }));
  }
}
