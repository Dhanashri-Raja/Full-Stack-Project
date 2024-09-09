import { Component } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { take } from 'rxjs';

@Component({
  selector: 'app-add-department',
  templateUrl: './add-department.component.html',
  styleUrl: './add-department.component.css'
})
export class AddDepartmentComponent {
  departmentName: string = '';
  constructor(
    private service: EmployeeService
  ) {}

  addDepartment(): void {
    if (this.departmentName === '') {
      alert("Please add department");
      return;
    }
    const body = {
      departmentName: this.departmentName
    };
    this.service.addDepartment(body).pipe(take(1)).subscribe((res) => {
      if (res) {
        alert('Department Added Successfully');
        this.service.navigateToLink('/adminDashboard');
      }
      console.log('>>>>>');
    });
  }
}
