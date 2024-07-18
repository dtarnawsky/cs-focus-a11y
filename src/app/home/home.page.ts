import { Component, ElementRef, viewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonInput, IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonButton, IonInput, IonItem, IonHeader, IonToolbar, IonTitle, IonContent, FormsModule],
})
export class HomePage {
  firstName: string = '';
  lastName: string = '';
  email: string = '';
  phone: string = '';
  errorMessage: string | undefined;
  container = viewChild.required<ElementRef>('container');
  constructor() { }

  submit() {
    if (this.firstName === '' || this.lastName === '' || this.email === '' || this.phone === '') {
      this.errorMessage = 'Please fill out all fields.';
      this.container().nativeElement.focus();
    }
  }
}
