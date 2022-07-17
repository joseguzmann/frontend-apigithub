import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { User } from '../models/user';
import { RepositoriesList } from '../models/repositories-list';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getUserUrl = "https://api.github.com/users/joseguzmann";
  getRepositoriesUrl = "https://api.github.com/users/joseguzmann/repos";

  // GET method to retrieve user information 
  // Returns an Observable that pushes an HTTP response
  getUser(): Observable<User> {
    return this.http.get<User>(this.getUserUrl);
  }

  // GET method to retrieve user's repositories list 
  // Returns an Observable that pushes an HTTP response
  getRepositories(): Observable<RepositoriesList> {
    return this.http.get<RepositoriesList>(this.getRepositoriesUrl);
  }
}
