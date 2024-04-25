import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { UserprofileService } from '../userprofile.service';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent {
  constructor(private userprofile:UserprofileService){
  }
  ngOnInit(){

}
}