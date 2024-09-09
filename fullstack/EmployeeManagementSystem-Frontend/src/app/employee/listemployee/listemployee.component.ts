import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { take } from 'rxjs';
import { EmployeeService } from '../../employee.service';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-listemployee',
  templateUrl: './listemployee.component.html',
  styleUrl: './listemployee.component.css',
  
})
export class ListemployeeComponent {
  allemployee: any[] = [];
  isAdmin: boolean = false;
  constructor(private service: EmployeeService, private router: Router, private authServic: AuthService) {
    this.getAllEmployee();
    this.isAdmin = this.authServic.isAdmin();
  }

  getAllEmployee(): void {
    this.service.getAllEmployee().pipe(take(1)).subscribe((res: any) => {
        this.allemployee = res;
        console.log('Employees:', this.allemployee);
        
      });
  }

  // ngOnInit(): void {
  //   this.service.getAllEmployee().pipe(take(1)).subscribe((res: any) => {
  //     this.allemployee = res;
  //     console.log('Employees:', res);
  //   });
  // }

  onDelete(employee: any): void {
    this.service.deleteEmployeeById(employee?.eid).subscribe((res: any) => {
      console.log('>>>>>>>>>>>>>>>>', res);

      alert('Employee Deleted successfully');
      this.getAllEmployee();
    });
  }

  onEdit(employee: any): void {
    console.log('####', employee?.eid);
    this.router.navigate(['/addemployee'], {
      queryParams: { eid: employee?.eid },
    });
    console.log('update');
  }
}
