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

// Deleting Employee Data...
deleteEmployee(employeeID:number) {
  return this.http.delete("http://localhost:8080/employeepayroll/remove/" + employeeID)
 }

 // Updating Employee Data...
updateEmployee(employeeID:number, employee: any) {
  return this.http.put("http://localhost:8080/employeepayroll/edit/" + employeeID, employee)
 }

// Getting details By ID...
getEmployeeByID(employeeID:number){
  return this.http.get("http://localhost:8080/employeepayroll/get/"+employeeID);
 }
  
}

