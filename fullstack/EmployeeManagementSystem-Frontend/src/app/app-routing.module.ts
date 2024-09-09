import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppHomeComponent } from './app-home/app-home.component';
import { LoginComponent } from './login/login.component';
import { EmployeeProfileComponent } from './employee/employee-profile/employee-profile.component';
import { EmployeeLoginGuardService } from './guard/employee-login-guard.service';
import { AdminLoginGuardService } from './guard/admin-login-guard.service';
import { EmployeehomeComponent } from './employee/employeehome/employeehome.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { RegisterComponent } from './register/register.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AddemployeeComponent } from './employee/addemployee/addemployee.component';
import { ListemployeeComponent } from './employee/listemployee/listemployee.component';
import { ContactComponent } from './contact/contact.component';
import { AddDepartmentComponent } from './add-department/add-department.component';
import { AddDesignationComponent } from './add-designation/add-designation.component';

import { AdminEmployeeGuardService } from './guard/admin-employee-auth-guard.service';

const routes: Routes = [
  { path: '', component: AppHomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'aboutus', component: AboutusComponent },
  {path:'addemployee', component:AddemployeeComponent, canActivate: [AdminLoginGuardService]},
  { path: 'adminDashboard', component: AdminDashboardComponent, canActivate: [AdminLoginGuardService] },  
  { path: 'add-department', component: AddDepartmentComponent , canActivate: [AdminLoginGuardService]},
  { path: 'add-designation', component: AddDesignationComponent , canActivate: [AdminLoginGuardService]},
  {path:'listemployee', component:ListemployeeComponent, canActivate: [AdminEmployeeGuardService]},
  { path: 'profile', component: EmployeeProfileComponent, canActivate: [EmployeeLoginGuardService] },
   { path: 'employeehome', component: EmployeehomeComponent, canActivate: [EmployeeLoginGuardService] },
  
  
];

@NgModule({
  imports: [RouterModule. forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
