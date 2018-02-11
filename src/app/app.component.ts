import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl:'app/landing-page.html'
  
})
export class AppComponent  { 
	pageHeading:string = 'Country list'; 
	
	citiesList:any[] = [
		{cityName: 'Hyderabad', code: 'HYD'}, 
		{cityName: 'Vizag', code: 'VSKP'}
	];
	countriesList:any[];
	
	//calling child function
	abc(data:any[]){
		//alert()
		console.log(data);
		this.countriesList = data;
	}
}
