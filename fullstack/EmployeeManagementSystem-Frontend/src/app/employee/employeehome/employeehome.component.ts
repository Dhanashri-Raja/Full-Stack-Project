import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { take } from 'rxjs';
import { AuthService } from '../../auth.service';


@Component({
  selector: 'app-employeehome',
  templateUrl: './employeehome.component.html',
  styleUrls: ['./employeehome.component.css']
})
export class EmployeehomeComponent {
  searchText: string = '';
  constructor(
   
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
  
  }
}