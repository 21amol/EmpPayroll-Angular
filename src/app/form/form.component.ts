import { Component, OnInit } from '@angular/core';
import { EmployeeModel } from '../header/EmployeeModel';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  employeeID: any = this.route.snapshot.paramMap.get("employeeID");
  
  constructor(private router:Router, private service: EmployeeService, private route: ActivatedRoute) { }
  employee: EmployeeModel = new EmployeeModel(0," ",0,"",new Date,"","","");

  ngOnInit(): void {
  }

  onCancel(){
    this.router.navigate(["dashboard"]);
  }
 
  onSubmit(form: NgForm) {
    console.log(this.employee);
    console.log("Form Submitted Successfully")
    this.service.addEmployee(this.employee).subscribe((data: any) => { this.router.navigate(["dashboard"])})
  }

  getVal(value:string) {
    console.log(value);
    this.employee.department=value.toString();
  }
  
  updateEmployee() {
    this.service.updateEmployee(this.employeeID, this.employee).subscribe((data:any) => 
    {this.router.navigate(["dashboard"])});
  }
  
}
