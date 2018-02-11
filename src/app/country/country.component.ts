import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'country-list',
  templateUrl:`app/country/country.html`
})
export class countryComponent  { 

	@Input() title:string; 
	@Input() cityList:string; 
	//country list object
	countryList:any[] = [
		{name: 'Afghanistan', code: 'AF'}, 
		{name: 'Åland Islands', code: 'AX'}, 
		{name: 'Albania', code: 'AL'}, 
		{name: 'Algeria', code: 'DZ'}, 
		{name: 'American Samoa', code: 'AS'}, 
		{name: 'AndorrA', code: 'AD'}, 
		{name: 'Angola', code: 'AO'}, 
		{name: 'Anguilla', code: 'AI'}, 
		{name: 'Antarctica', code: 'AQ'}, 
		{name: 'Antigua and Barbuda', code: 'AG'}, 
		{name: 'Argentina', code: 'AR'}, 
		{name: 'Armenia', code: 'AM'}, 
		{name: 'Aruba', code: 'AW'}, 
		{name: 'Australia', code: 'AU'}, 
		{name: 'Austria', code: 'AT'}, 
		{name: 'Azerbaijan', code: 'AZ'}, 
		{name: 'Bahamas', code: 'BS'}		
	]; 
	
	@Output()	
	passChildData:EventEmitter<any>;
	
	constructor() {
		this.passChildData = new EventEmitter<any>();
	};
	
	onButtonClick () {	
		this.passChildData.emit(this.countryList);
	}
}