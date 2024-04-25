
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatChipInputEvent } from '@angular/material/chips';
export interface Fruit {
  name: string;
  fruits: string;
}
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerForm!: FormGroup
  countries: String[] = ['India', 'Canada', 'USA', 'Australia', 'America', 'Kenia']
  states: String[] = ['Maharashtra', 'Goa', 'Bihar', 'Manipur', 'Keral', 'Madhya Pradesh']


  formatLabel(value: number): string {
    if (value >= 100) {
      return Math.round(value / 100) + 'Age';
    }
    return `${value}`;
  }


  constructor(private fb: FormBuilder) { }
  ngOnInit() {
    this.myForm();
  }
  myForm() {
    this.registerForm = this.fb.group({
      firstname: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      age: ['', Validators.required],
      tag: ['', Validators.required],
      contact: ['', [Validators.required]],
      country: ['', [Validators.required]],
      state: ['', [Validators.required]],
      addressType: ['home', Validators.required],
      address1: ['', [Validators.required]],
      address2: [''],
      companyAddress1: ['', [Validators.required]],
      companyAddress2: ['']
    });
  }
  submit() {
    console.log(this.registerForm.value);
  }
  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  fruits: Fruit[] = [{
    name: 'Lemon',
    fruits: ''
  }, {
    name: 'Lime',
    fruits: ''
  }, {
    name: 'Apple',
    fruits: ''
  }];

  announcer = inject(LiveAnnouncer);

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our fruit
    if (value) {
      this.fruits.push({
        name: value,
        fruits: ''
      });
    }

    // Clear the input value
    event.chipInput!.clear();
  }

  remove(fruit: String): void {
    const index = this.fruits.indexOf(fruit);

    if (index >= 0) {
      this.fruits.splice(index, 1);

      this.announcer.announce(`Removed ${fruit}`);
    }
  }

  edit(fruit: String, event: MatChipInputEvent) {
    const value = event.value.trim();

    // Remove fruit if it no longer has a name
    if (!value) {
      this.remove(fruit);
      return;
    }

    // Edit existing fruit
    const index = this.fruits.indexOf(fruit);
    if (index >= 0) {
      this.fruits[index] = value;
    }
  }
}





