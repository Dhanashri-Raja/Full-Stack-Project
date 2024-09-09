import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../user';

import { tap } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private loginUrl = 'http://localhost:8080/api/v1';
  private url = 'http://localhost:8080';
  private loggedInUser: User | null = null;



  constructor(private http: HttpClient,
    private router: Router) { }

  loginUser(user: User): Observable<any> {
    console.log('Sending login request with credentials:', user);
    return this.http.post(`${this.url}/api/user/login`, user).pipe(
      tap((response: any) => {
        this.storeLoggedInUser(response);
      })
    );
  }
  storeLoggedInUser(user: User) {
    this.loggedInUser = user;
  }

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.url + '/api/user');
  }

  // deleteUserById(userId: number): Observable<void> {
  //   return this.http.delete<void>(`${this.loginUrl}/api/user/${userId}`, { responseType: 'text' as 'json' });
  // }
  deleteUserById(userId: number): Observable<string> {
    return this.http.delete(`http://localhost:8080/api/user/${userId}`, { responseType: 'text' });
  }
  
  public registerUser(user: User) {
    return this.http.post(`${this.url}/api/user`, user);
  }
  

  // Get the stored logged-in user
  getLoggedInUser(): User | null {
    return this.loggedInUser;
  }

  updateUserByUsername(username: string, user: User): Observable<User> {
    return this.http.put<User>(`${this.loginUrl}/${username}/updateUsername`, user);
  }
  getUserById(userId: any): Observable<User> {
    return this.http.get<User>(`${this.url}/api/user/${userId}`);
  }
  searchUsers(searchText: string): Observable<User[]> {
    return this.http.get<User[]>(`${this.url}/api/user/search?searchText=${searchText}`);
  }

  employeeLogout(): void {
    localStorage.clear();
    this.router.navigate(['/']);
  }

  updateUserInformation(id: any, user: User): Observable<User> {
    return this.http.put<User>(`${this.url}/api/user/update/${id}`, user);
  }

  navigate(url: string): void {
    this.router.navigate(['/' + url]);
  }

  isAdmin():boolean {
    return localStorage && localStorage.getItem('role') === 'admin' ? true : false;
  }
}
