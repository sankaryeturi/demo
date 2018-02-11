//imports
import { NgModule }      from '@angular/core';
//import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';


//declarations
import { AppComponent }  from './app.component';
import { countryComponent }  from './country/country.component';
import { studentsComponent }  from './students/students.component';
import { employeeComponent }  from './employees/employees.component';
import { singnInComponent }  from './auth/signIn.component';
import { singnUpComponent }  from './auth/signUp.component';

import { routing } from './app.routes';

//ngModules
@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule, JsonpModule, routing ],
  declarations: [ AppComponent, countryComponent, studentsComponent, employeeComponent, singnInComponent, singnUpComponent  ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
