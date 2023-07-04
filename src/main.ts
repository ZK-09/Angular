import 'zone.js/dist/zone';
import { Component, Inject, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
  ],
  // templateUrl:`./index.html`,
  template: `
  <form #btnSubmit="ngForm" (ngSubmit)="submit(btnSubmit)">
  <div>
    <label for="full_name"> 
      Full Name
    </label>
  </div>
  <div>    
    <td>
      <input id="first_name" type="text" name="first_name" [(ngModel)]="firstName" ngModel/>
    </td>
    <td>
      <input id="last_name" type="text" name="last_name" [(ngModel)]="lastName" ngModel/>
    </td>
  </div>                
  <div>
    <label for="full_name"> 
      E-mail
    </label>          
  </div>  
  <div>
    <input id="email" type="email" name="email" placeholder="ex: email@yahoo.com" [(ngModel)]="email" ngModel/>
  </div>
  <div>
    <label for="email_note">
      example@example.com
    </label>
  </div>
  <div>
  </div>
  <div>
    <td>
      <button class="button" type="submit"> Submit </button>
    </td>
    <td>
      <button (click)="handleButtonClear()" class="button" type="submit"> Clear Form </button>
    </td>
  </div>
</form>

  `,
})

export class App {

  firstName : String = '';
  lastName : String = '';
  email : String = '';
  names : String = '';
  // constructor(firstName : any, lastName : any, email : any){
  //   this.firstName = firstName;
  //   this.lastName = lastName;
  //   this.email = email;
  // }

  submit(btnSubmit: any){
    this.names = this.firstName.concat(this.lastName.toString())
    console.log("Name : ", this.names)
  }
  handleButtonClear(){
    this.firstName = '';
    this.lastName = '';
    this.email = '';
  }
}

bootstrapApplication(App);
