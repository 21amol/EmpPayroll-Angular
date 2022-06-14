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
onAddUser(){
  this.router.navigate(["form"]);
}
}
