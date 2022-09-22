import { Injectable } from "@angular/core";
import { User } from "./User";
import { of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CATCH_ERROR_VAR } from "@angular/compiler/src/output/output_ast";

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor(private http: HttpClient) { }

  // private serviceUrl = 'http://localhost:3000/User';
  private serviceUrl = 'http://localhost:3000/';
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.serviceUrl + 'User');
  }




  addPerson(user: User): Observable<any> {
    const headers = { 'content-type': 'application/json' }
    const body = JSON.stringify(user);
    console.log(body)
    return this.http.post(this.serviceUrl + 'User', body, { 'headers': headers })
  }

  deletePerson(id: number): Observable<void> {
    return this.http.delete<void>(`${this.serviceUrl + 'User'}/${id}`);
      
  }
}
