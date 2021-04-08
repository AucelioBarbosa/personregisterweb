import { Router } from '@angular/router';
import { PersonService } from './../../services/person.service';
import { Person } from './../../components/person/Person.model';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { format, parseISO } from 'date-fns';
import * as moment from 'moment';

@Component({
  selector: 'app-person-forms-dialog',
  templateUrl: './person-forms-dialog.component.html',
  styleUrls: ['./person-forms-dialog.component.scss']
})
export class PersonFormsDialogComponent implements OnInit {

  person: Person = {
    
    fullName: '',
    cpf:'',
    email:'',
    birthday:'',
    gender: 0,
    description:''
    
    };

  constructor( private dialogRef: MatDialogRef<PersonFormsDialogComponent>,private PersonService: PersonService,
    private router: Router) { }

  ngOnInit(): void {
  }

  createPerson():void{
    const dateFormat: moment.Moment = moment.utc(this.person.birthday).local();
    this.person.birthday= dateFormat.format("DD/MM/YYYY"),
    this.PersonService.create(this.person).subscribe(()=>{
      this.PersonService.showMessage('Cadastro feito com sucesso!')
      this.router.navigate(['/persons'])
      this.dialogRef.close();
    })
  }

  cancel(): void {
    this.dialogRef.close();
  }
}
