import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs';

import { ActivatedRoute } from '@angular/router';
import { Department } from '../../modal/department';
import { Designation } from '../../modal/designation';
import { EmployeeService } from '../../employee.service';


@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrl: './addemployee.component.css',
})
export class AddemployeeComponent implements OnInit{
  ename: string = '';
  email: string = '';
  gender: string = '';
  mobile: any = '';
  salary: any = '';
  eDepartment: string = '';
  joiningDate: string = '';
image: string = '';
  isEdit: boolean = false;
  errorMessage: string = '';
  eid: any = '';
  departmentList: Array<Department> = [];
  designationList: Array<Designation> = [];
  departmentId: number = 0;
  designationId: number = 0;

  constructor(
    private service: EmployeeService,
    private activatedRoute: ActivatedRoute
  ) {
    this.getDepartmentList();
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.activatedRoute.queryParams.subscribe((res: any) => {
        console.log('>>>>>>>>', res);
        if (res && res?.eid) {
          this.isEdit = true;
          this.getEmployeeById(res?.eid);
        }
      });  
    }, 1000);
    
  }

  getDepartmentList(): void {
    this.service
      .getDepartmentList()
      .pipe(take(1))
      .subscribe((res: any) => {
        if (res && Array.isArray(res)) {
          this.departmentList = res;
        }
      });
  }

  getEmployeeById(id: any): void {
    this.service
      .getEmployeeById(id)
      .pipe(take(1))
      .subscribe((res) => {
        if (res && res?.eid) {
          this.departmentId = res?.department?.d_id;
          this.designationList = res?.department?.designations;
          this.eid = res?.eid;
          this.ename = res?.ename;
          this.gender = res?.gender;
          this.eDepartment = res?.eDepartment;
          this.email = res?.email;
          this.mobile = res?.mobile;
          this.salary = res?.salary;
          this.joiningDate = res?.joiningDate; 
this.image = res?.image; 
          this.designationId = res?.designation?.dc_id;
          console.log('>>>>>>>>>>>>>>>>%%>>', this.designationId)
        }
        this.getSubList();
      });
  }
  addUpdateEmployee(): any {
    if (this.ename === '') {
      this.errorMessage = 'Employee name should not be blank';
      document.getElementById('errordiv')?.scrollIntoView(true);
      return;
    }

    if (this.gender === '') {
      this.errorMessage = 'Employee gender should not be blank';
      document.getElementById('errordiv')?.scrollIntoView(true);
      return;
    }

    if (this.email === '') {
      this.errorMessage = 'Employee Email should not be blank';
      document.getElementById('errordiv')?.scrollIntoView(true);
      return;
    }
    if (this.mobile === '') {
      this.errorMessage = 'Employee Phone Number should not be blank';
      document.getElementById('errordiv')?.scrollIntoView(true);
      return;
    }

    if (this.salary === '') {
      this.errorMessage = 'Employee Salary should not be blank';
      document.getElementById('errordiv')?.scrollIntoView(true);
      return;
    }


    if (this.joiningDate === '') {
      this.errorMessage = 'Employee joining Date should not be blank';
      document.getElementById('errordiv')?.scrollIntoView(true);
      return;
    }
if (this.image === '') {
        this.errorMessage = 'Employee image should not be blank';
        document.getElementById('errordiv')?.scrollIntoView(true);
        return;
      }

    const eDepartment = this.departmentList.find((item: Department) => item.d_id === parseInt(this.departmentId.toString()));
    const eDesignation = this.designationList.find((item: Designation) => item?.dc_id === parseInt(this.designationId.toString()))
    const body: any = {
      ename: this.ename,
      gender:this.gender,
      email: this.email,
      mobile:this.mobile,
      salary: this.salary,
      department: eDepartment,
      designation: eDesignation,
      joiningDate: this.joiningDate,
image: this.image
      
    };
    if (!this.isEdit) {
      this.service
        .addEmployee(body)
        .pipe(take(1))
        .subscribe((res: any) => {
          console.log('>>>>>>>>>>>>>>>>', res);
          if (res && res === 'Employee added successfully') {
            alert('Employee Added successfully');
            this.service.navigateToLink('listemployee');
          }
        });
    } else {
      body.eid = this.eid;
      this.service.updateEmployee(body).subscribe((res: any) => {
        console.log('###', res);
        if (res && res?.eid) {
          alert('Employee Updated successfully');
          this.service.navigateToLink('listemployee');
        }
      });
    }
  }

  getSubList(): void {
    console.log('####', this.departmentId);
    if (this.departmentId) {
      const subList = this.departmentList.filter((item: Department) => item?.d_id === parseInt(this.departmentId.toString(), 10));
      console.log('>>>>>', this.designationId);
      if (subList && subList.length > 0) {
        this.designationList = subList[0].designations;
      }
    }
  }
}


