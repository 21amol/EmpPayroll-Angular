export class EmployeeModel {

    employeeID: number =1;  
	name: string = "";
  salary: number = 30000;
	gender: string = "";
  joiningdate: Date;
	note: string = "";
	profilePic: string = "";
  department: string = "";
  
	constructor(employeeID: number, name: string, salary: number, gender: string, joiningdate: Date, note: string, 
		profilePic: string, department: string) {

		this.employeeID = employeeID;
		this.name = name;
		this.gender = gender;
		this.profilePic = profilePic;
		this.department = department;
		this.salary = salary;
		this.joiningdate = joiningdate;
		this.note = note;
		}
}
