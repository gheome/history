import { NgModule } from '@angular/core';
import { UsersComponent } from './components/users/users.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { UserRequestReducer } from './store/reducers/user-request.reducer';
import { EffectsModule } from '@ngrx/effects';
import { DashboardEffects } from './store/effects/dashboard.effects';
import { DashboardReducer } from './store/reducers/dashboard.reducer';
import { CatService } from './services/cat.service';
import { LocationsComponent } from './components/locations/locations.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { SaveLocationDialogComponent } from './components/save-location-dialog/save-location-dialog.component';

@NgModule({
  declarations: [
    UsersComponent,
    DashboardComponent,
    LocationsComponent,
    NavbarComponent,
    HomeComponent,
    ContactComponent,
    SaveLocationDialogComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    StoreModule.forFeature('dashboard', {
      userRequest: UserRequestReducer,
      cats: DashboardReducer
    }),
    EffectsModule.forFeature([DashboardEffects]),
  ],
  providers: [CatService],
  exports: []
})

export class DashboardModule { }
