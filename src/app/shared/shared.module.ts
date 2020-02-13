import { NgModule } from '@angular/core';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatTabsModule, MatMenuModule, MatFormFieldModule, MatSelectModule } from '@angular/material';
import { AgmCoreModule } from '@agm/core';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../../environments/environment';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  imports: [
    MaterialModule,
    ReactiveFormsModule,
    MatTabsModule,
    MatMenuModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyA8R2UL3aUtiu3o19kWnUrxxVVjPWR2gF8'
    }),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    FormsModule
  ],
  exports: [
    MaterialModule,
    ReactiveFormsModule,
    MatTabsModule,
    MatMenuModule,
    AgmCoreModule,
    AngularFireModule,
    AngularFirestoreModule,
    MatIconModule,
    MatToolbarModule,
    MatFormFieldModule,
    FormsModule
  ]
})

export class SharedModule { }
