import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private http = inject(HttpClient);
  
  constructor() { }

  getUsers() {
    return this.http.get('https://localhost:5001/api/users');
  }
}
