import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Department } from './modal/department';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
 
 

  navigateToLink(arg0: string) {
    this.router.navigate(['/'+ arg0]);
  }
 
  private loginUrl = 'http://localhost:8080';
  constructor(private router:Router, private httpClient:HttpClient) { }

  
  getAllEmployee(): Observable<any>{
    return this.httpClient.get(`${this.loginUrl}/employee/employeelist`);
  }

  deleteEmployeeById(eid:any):Observable<any>{
    return this.httpClient.delete(`${this.loginUrl}/employee/deleteemployee/${eid}`,{ responseType: 'text' });
  }

  addEmployee(body: any): Observable<string>{
    return this.httpClient.post(`${this.loginUrl}/employee/addemployee`, body, { responseType: 'text' });
   }

  updateEmployee(employee: any):Observable<any> {
    return this.httpClient.put(`${this.loginUrl}/employee/updateemployee/${employee?.eid}`, employee);
  }

  getEmployeeById(id: any): Observable<any>{
    return this.httpClient.get(`${this.loginUrl}/employee/getEmployeeById/${id}`);
  }

  getDepartmentList(): Observable<Array<Department>> {
    return this.httpClient.get<Array<Department>>(`${this.loginUrl}/department/list`);
  }

  addDepartment(body: any): Observable<any>{
    return this.httpClient.post(`${this.loginUrl}/department/add`, body, { responseType: 'text' });
   }
  addDesignation(body: any): Observable<any>{
    return this.httpClient.post(`${this.loginUrl}/designation/add`, body, { responseType: 'text' });
   }
}
