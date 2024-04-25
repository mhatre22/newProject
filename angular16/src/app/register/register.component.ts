
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatChipEditedEvent, MatChipInputEvent } from '@angular/material/chips';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

export interface Tag {
  name: string;
  tags: string;
}
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerForm! : FormGroup
  countries: String[] = ['India', 'Canada', 'USA', 'Australia', 'America', 'Kenia']
  states: String[] = ['Maharashtra', 'Goa', 'Bihar', 'Manipur', 'Keral', 'Madhya Pradesh']


  formatLabel(value: number): string {
    if (value >= 100) {
      return Math.round(value / 100) + 'Age';
    }
    return `${value}`;
  }


  constructor(private fb: FormBuilder , private dataService:DataService,private router:Router) {

  }
  ngOnInit() {
    this.myForm();
  }
  myForm() {
    this.registerForm = this.fb.group({
      img: ['', [Validators.required]],
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
  userregister() {
 
      console.log(this.registerForm.value)
    }
  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  tags: Tag[] = [{
    name: 'Kho-kho',
    tags: ''
  }, {
    name: 'Football',
    tags: ''
  }, {
    name: 'Criket',
    tags: ''
  }];

  announcer = inject(LiveAnnouncer);

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our fruit
    if (value) {
      this.tags.push({
        name: value,
        tags: ''
      });
    }

    event.chipInput!.clear();
  }

  remove(tag: Tag): void {
    const index = this.tags.indexOf(tag);

    if (index >= 0) {
      this.tags.splice(index);

      this.announcer.announce(`Removed ${tag}`);
    }
  }

  edit(tag: Tag, event: MatChipEditedEvent) {
    const value = event.value.trim();


    if (!value) {
      this.remove(tag);
      return;
    }


    const index = this.tags.indexOf(tag);
    if (index >= 0) {
      this.tags[index].name = value;
    }
  }
 
}









