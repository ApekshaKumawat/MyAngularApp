import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user.interface';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  private baseUrl = 'https://jsonplaceholder.typicode.com';
 
 constructor(private http: HttpClient) {}
 
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.baseUrl}/users`);
  }
  public getUser(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/user/${id}`);
  }
  
 }