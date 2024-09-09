import { Component } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { take } from 'rxjs';
import { Department } from '../modal/department';

@Component({
  selector: 'app-add-designation',
  templateUrl: './add-designation.component.html',
  styleUrl: './add-designation.component.css'
})
export class AddDesignationComponent {
  departmentName: string = '';
  allDepartment: Array<Department> = [];
  parentDepartment: number = 0;
  constructor(
    private service: EmployeeService
  ) {
    this.service.getDepartmentList().pipe(take(1)).subscribe((res) => {
      if (res && res.length > 0) {
        this.allDepartment = res;
        this.parentDepartment = this.allDepartment[0].d_id;
      }
    });
  }

  addDesignation(): void {
    if (this.departmentName === '') {
      alert("Please add Designation");
      return;
    }
    const body = {
      designationName: this.departmentName,
      // employeeDepartment: {
      department:{
        "d_id": this.parentDepartment
      }
    };
    this.service.addDesignation(body).pipe(take(1)).subscribe((res: any) => {
      if (res) {
        console.log("**************",body);
        // alert('Designation Added Successfully');
        alert('"Designation added successfully"')
        this.service.navigateToLink('/adminDashboard');
      }
      console.log('>>>>>');
    });
  }
}
