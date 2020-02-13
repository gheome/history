import { NgModule } from '@angular/core';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { StoreModule } from '@ngrx/store';
import { LoginReducer } from './store/reducers/login.reducer';
import { RegisterReducer } from './store/reducers/register.reducer';
import { LogoutReducer } from '../dashboard/store/reducers/logout.reducer';
import { EffectsModule } from '@ngrx/effects';
import { LoginEffects } from './store/effects/login.effects';
import { AuthGuard } from '../auth.guard';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    RouterModule,
    CommonModule,
    SharedModule,
    StoreModule.forFeature('auth', {
      login: LoginReducer,
      register: RegisterReducer,
      logout: LogoutReducer
  }),
  EffectsModule.forFeature([LoginEffects])
  ],
  providers: [AuthGuard],
  exports: [LoginComponent, RegisterComponent]

})

export class AuthModule { }
