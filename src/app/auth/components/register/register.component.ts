import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { RegisterUserAction } from '../../store/actions/register.actions';
import { Router } from '@angular/router';
import { registerDataSelector } from '../../../auth/store/selectors/login.selector';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private store: Store<any>, private router: Router, private builder: FormBuilder) { }

  public registerForm: FormGroup;
  public firstName: string;
  public lastName: string;
  public email: string;
  public password: string;

  ngOnInit() {

    this.registerForm = this.builder.group({
      firstName: ['', [Validators.minLength(1)]],
      lastName: ['', [Validators.minLength(1)]],
      email: ['', [Validators.email]],
      password: ['', [Validators.pattern(RegExp('[a-zA-Z]*')), Validators.minLength(6)]]
    });
    this.registerForm.valueChanges.subscribe((response) => {
      this.firstName = response.firstName;
      this.lastName = response.lastName;
      this.email = response.email;
      this.password = response.password;
    }
    );
    console.log(this.registerForm);
  }

  public registerUser = (event) => {
    event.preventDefault();
    this.store.dispatch(new RegisterUserAction(this.registerForm.value));
    // localStorage.setItem(obj.data.email, JSON.stringify(obj));
    this.store.select(registerDataSelector).subscribe((response: any) => {
      localStorage.setItem(response.email, JSON.stringify(response));
      this.router.navigate(['/login']);
    });
  }

}
