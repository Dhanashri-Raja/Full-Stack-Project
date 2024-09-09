import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { User } from '../../../user';
import { AuthService } from '../../auth.service';
import { UpdateProfileComponent } from '../../update-profile/update-profile.component';

@Component({
  selector: 'app-employee-profile',
  templateUrl: './employee-profile.component.html',
  styleUrls: ['./employee-profile.component.css']
})
export class EmployeeProfileComponent {
  accountNumber: string = '';
  user: User = new User(0,"","","","","");
  constructor(
    private authService: AuthService,
    private dialog: MatDialog
  ) {
    const usr = localStorage.getItem('userInfo');
    if (usr !== null) {
      this.user = JSON.parse(usr);
    }
  }

  openProfileDialog(): void {
    const dialogRef = this.dialog.open(UpdateProfileComponent, {
      data: {id: localStorage.getItem('uId')},
      maxWidth: '100vw',
      maxHeight: '100vh',
      height: '80%',
      width: '80%'
    });
    dialogRef.afterClosed().subscribe(() => {
      const usr = localStorage.getItem('userInfo');
      if (usr !== null) {
        this.user = JSON.parse(usr);
      }
    });
  }
}
