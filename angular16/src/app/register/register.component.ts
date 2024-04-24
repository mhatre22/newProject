import { Component } from '@angular/core';
import { FormBuilder, FormControl,FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  formatLabel(value: number): string {
    if (value >= 1000) {
      return Math.round(value / 1000) +  'Age';
    }
    return `${value}`;
  }
registerForm!:FormGroup

constructor(private fb:FormBuilder){}
ngOnInit(){
this.myForm();
}
myForm(){
  this.registerForm=this.fb.group({
firstname:['',[Validators.required]],
lastname:['',[Validators.required]],
age:['',Validators.required],
tag:['',Validators.required],
email:['',[Validators.email]],
contact:['',[Validators.required]],
country:['',[Validators.required]],
state:['',[Validators.required]],
address:['',[Validators.required]]
  });
}
submit(){
  console.log(this.registerForm.value);
}
}