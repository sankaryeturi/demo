import { Component } from '@angular/core';

@Component({
  selector: 'employee-component',
  templateUrl:'app/employees/employees-list.html'
  
})
export class employeeComponent  { 
	pageHeading:string = 'Employees list'; 
	
	employeesList:any[] = [
		{empName: 'sankar', empID: '1001'}, 
		{empName: 'gowri', empID: '1002'}, 
		{empName: 'yeturi', empID: '1003'}, 
		{empName: 'nani', empID: '1004'}, 
		{empName: 'nani sankar', empID: '1005'}
	];
}
