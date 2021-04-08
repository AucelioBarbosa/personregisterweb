import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { PersonFormsDialogComponent } from '../person-forms-dialog/person-forms-dialog.component';

@Component({
  selector: 'app-person-crud',
  templateUrl: './person-crud.component.html',
  styleUrls: ['./person-crud.component.scss']
})
export class PersonCrudComponent implements OnInit {

  constructor(private router :Router,
    private dialog: MatDialog ) { }

  ngOnInit(): void {
  }

  navgateToPersonCreate():void{
    this.router.navigate(['/persons/create'])
    
  }


  openDialog(): void {
    const dialogRef = this.dialog.open(PersonFormsDialogComponent, {
      width: '500px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });

  }

}
