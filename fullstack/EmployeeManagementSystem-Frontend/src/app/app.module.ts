import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EmployeeService } from './employee.service';
import { AddemployeeComponent } from './employee/addemployee/addemployee.component';
import { ListemployeeComponent } from './employee/listemployee/listemployee.component';
import { RegisterComponent } from './register/register.component';
import { EmployeeheaderComponent } from './employee/employeeheader/employeeheader.component';
import { AdminheaderComponent } from './adminheader/adminheader.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { EmployeehomeComponent } from './employee/employeehome/employeehome.component';
import { AppheaderComponent } from './appheader/appheader.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ContactComponent } from './contact/contact.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { EmployeeProfileComponent } from './employee/employee-profile/employee-profile.component';
import { LoginComponent } from './login/login.component';
import { AppHomeComponent } from './app-home/app-home.component';
import {MatIconModule} from '@angular/material/icon';
import { EmployeeLoginGuardService } from './guard/employee-login-guard.service';
import { AdminLoginGuardService } from './guard/admin-login-guard.service';
import { RouterModule } from '@angular/router';
import { MatButtonModule} from '@angular/material/button'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UpdateProfileComponent } from './update-profile/update-profile.component';
import { AddDepartmentComponent } from './add-department/add-department.component';
import { AdminEmployeeGuardService } from './guard/admin-employee-auth-guard.service';
import { AddDesignationComponent } from './add-designation/add-designation.component';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    AddemployeeComponent,
    ListemployeeComponent,
    RegisterComponent,
    AdminheaderComponent,
    AdminDashboardComponent,
    EmployeehomeComponent,
    AppheaderComponent,
    EmployeeheaderComponent,
    ContactComponent,
    AboutusComponent,
    EmployeeProfileComponent,
    LoginComponent,
    AppHomeComponent,
    UpdateProfileComponent,
    AddDepartmentComponent,
    AddDesignationComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([]),
    AppRoutingModule,
    MatDialogModule,
    MatIconModule,
    MatButtonModule,
    BrowserAnimationsModule,
    CommonModule
  ],
  providers: [EmployeeService, EmployeeLoginGuardService, AdminLoginGuardService,AdminEmployeeGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }