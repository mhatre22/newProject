import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
apiUrl = "http://localhost:3000/userRegister";

  constructor(private http: HttpClient) { }

  //getUserProfile(): Observable<any> {
   // return this.http.get(this.apiUrl);//
  

  addUserProfile(userProfiledata: any): Observable<any> {
    return this.http.post(this.apiUrl, userProfiledata);
  }

  //updateUserProfile(UserProfile: any): Observable<any> {
    //return this.http.put(`${this.apiUrl}/${UserProfile.id}`, UserProfile);
}

  //deleteUserProfile(id: number): Observable<any> {
   // return this.http.delete(`${this.apiUrl}/${id}`);
  



