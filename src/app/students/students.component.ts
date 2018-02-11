import { Component } from '@angular/core';

@Component({
  selector: 'students-component',
  templateUrl:'app/students/students-list.html'
  
})
export class studentsComponent  { 
	pageHeading:string = 'students list'; 
	
	studentsList:any[] = [
		{studentName: 'sankar', studentID: '1001'}, 
		{studentName: 'gowri', studentID: '1002'}, 
		{studentName: 'yeturi', studentID: '1003'}, 
		{studentName: 'nani', studentID: '1004'}, 
		{studentName: 'nani sankar', studentID: '1005'}
	];
}
