import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from '../entities/employee';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseUrl = "http://localhost:8080/apis/v1/";

  constructor(private httpClient: HttpClient) { }

  getEmployeeList(): Observable<Employee[]> {
    return this.httpClient.get<Employee[]>(`${this.baseUrl}`+ "employees");
  }

  createEmployee(employee: Employee) : Observable<Object> {
    return this.httpClient.post<Employee>(`${this.baseUrl}` + "createEmployee", employee);
  }

  getEmployeeById(id: number): Observable<Employee> {
    return this.httpClient.get<Employee>(`${this.baseUrl}` + "employees/" + `${id}`);
  }

  updateEmployee(id: number, employee: Employee) : Observable<Object> {
    return this.httpClient.put<Employee>(`${this.baseUrl}` + "employees/" + `${id}`,  employee);
  }

  deleteEmployee(id: number) : Observable<Object> {
    return  this.httpClient.delete<Employee>(`${this.baseUrl}` + "employees/" + `${id}`);
  }
}
