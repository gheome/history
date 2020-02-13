import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { MatCardModule, MatButtonModule, MatSelectModule, MatDialogModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AuthModule } from './auth/auth.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './material/material.module';
import { SaveLocationDialogComponent } from './dashboard/components/save-location-dialog/save-location-dialog.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  entryComponents: [ SaveLocationDialogComponent ],
  imports: [
    BrowserModule,
    MaterialModule,
    AppRoutingModule,
    HttpClientModule,
    MatCardModule,
    MatButtonModule,
    AuthModule,
    RouterModule,
    DashboardModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    BrowserAnimationsModule,
    MatSelectModule,
    MatDialogModule,
  ],
  providers: [EffectsModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
