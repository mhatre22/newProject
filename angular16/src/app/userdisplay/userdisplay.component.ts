import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UserProfile } from '../user.model';

@Component({
  selector: 'app-userdisplay',
  templateUrl: './userdisplay.component.html',
  styleUrls: ['./userdisplay.component.css']
})
export class UserdisplayComponent {
  @Input() userProfile :UserProfile;
  @Output()onRemoveUser =new EventEmitter<Number>();
  @Output()onEditUser = new EventEmitter<number>();

  constructor(){
 this.userProfile ={
  id:0,
  image:"",
  firstName : "",
 lastName :"",
  email :"",
  age: 0,
  tag:"",
  contact:0,
  country: "",
  state: "",
  addressType: "",
  address1: "",
  address2: "",
  companyAddress1: "",
  companyAddress2: ""
 }
   
  }
  delUser(){
    this.onRemoveUser.emit(this.userProfile.id);
  }
  editUser(){
    
  }
  }
  