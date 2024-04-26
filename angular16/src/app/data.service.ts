import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
apiUrl = "http://localhost:3000/userRegister";

  constructor(private http: HttpClient) { }
  addUserProfile(userProfiledata: any): Observable<any> {
    return this.http.post(this.apiUrl, userProfiledata);
  }

  updateUserProfile(UserProfiledata: any): Observable<any> {
  return this.http.put(`${this.apiUrl}/${UserProfiledata.id}`, UserProfiledata);
}

  cancelUserProfile(UserProfileId: any): Observable<any> {
   return this.http.delete(`${this.apiUrl}/${UserProfileId}`);
  
}
}


