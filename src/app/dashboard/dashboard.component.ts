import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public employee:any;

  constructor(private router:Router, private service:EmployeeService) { }

  ngOnInit(): void {
    this.service.getEmployee().subscribe((data:any)=>{
      this.employee=data.data;
      });
      console.log(this.employee);
  }

  // It will navigate the user to form, when he clicks add button...
onAddUser(){
  this.router.navigate(["form"]);
}

//Delete call from service...
deleteEmployee(employeeID:number) {
  console.log(employeeID);
  this.service.deleteEmployee(employeeID).subscribe((data) => { console.log("Data Deleted!!!");
  this.ngOnInit();
//  this.router.navigate(["dashboard"])
});
 }
 
 // Updating call from service...
updateEmployee(employeeID:number) {
this.router.navigate(["update", employeeID]);
 }

}
