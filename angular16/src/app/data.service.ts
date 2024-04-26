import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserProfile } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
apiUrl = "http://localhost:3000/userRegister";

  constructor(private http: HttpClient) { }
  addUserProfile(userProfile:UserProfile): Observable<any> {
    return this.http.post<UserProfile>(this.apiUrl,userProfile);
  }
getUserProfile(userProfile:UserProfile):Observable<any>{
  return this.http.get<UserProfile[]>(this.apiUrl);
}
 
  updateUserProfile(UserProfiledata: any): Observable<any> {
  return this.http.put(`${this.apiUrl}/${UserProfiledata.id}`, UserProfiledata);
}

  cancelUserProfile(id: String): Observable<any> {
   return this.http.delete(this.apiUrl+'/' + id);
  
}
}


