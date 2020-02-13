import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFirestore } from 'angularfire2/firestore';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  public formGroup: FormGroup;

  constructor(
    private fb: FormBuilder,
    private afs: AngularFirestore,
    private router: Router
    ) { }

  ngOnInit() {
    this.formGroup = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      phone: [''],
      message: ['', Validators.required]
    });

    this.formGroup.valueChanges.subscribe((data) => {
      console.log(data);
    });
  }

  public sendValues(): void {
    console.log(this.formGroup.controls);
    this.afs.collection('contact').add(this.formGroup.value);
    this.router.navigate(['/locations']);
  }

}
