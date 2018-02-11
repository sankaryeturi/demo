// ====== ./app/app.routes.ts ======
//imports
import { Component, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import {  } from "@angular/core";

//declarations
import { studentsComponent }  from './students/students.component';
import { employeeComponent }  from './employees/employees.component';
import { singnInComponent }  from './auth/signIn.component';
import { singnUpComponent }  from './auth/signUp.component';

// Route Configuration
export const routes: Routes = [
  { path: '', redirectTo: '/signIn', pathMatch: 'full'},  
  { path: 'students', component: studentsComponent  },
  { path: 'employees', component: employeeComponent },
  { path: 'signIn', component: singnInComponent },
  { path: 'signUp', component: singnUpComponent },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);