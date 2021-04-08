import { Person } from '../Person.model';
import { PersonService } from '../../../services/person.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-person-read',
  templateUrl: './person-read.component.html',
  styleUrls: ['./person-read.component.scss']
})
export class PersonReadComponent implements OnInit {

  persons: Person[] = [];
  displayedColumns = ['id','fullName','cpf','birthday','gender','email','description','action']

  constructor(private personService: PersonService) {}

  ngOnInit(): void {
   this.readPersons()
  }

  readPersons(){
    this.personService.read().subscribe((persons) => {
      this.persons = persons
      console.log(this.persons)
    })
  }

}
