import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }

// Adding Employee to database...
addEmployee(employee: any) {
return this.http.post("http://localhost:8080/employeepayroll/add", employee);
 }

// Getting all Employee Details...
getEmployee() {
  return this.http.get("http://localhost:8080/employeepayroll/get")
}

}

