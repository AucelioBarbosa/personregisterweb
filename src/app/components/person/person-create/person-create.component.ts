import { Person } from '../Person.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PersonService } from '../../../services/person.service';
import { format, parseISO } from 'date-fns';

@Component({
  selector: 'app-person-create',
  templateUrl: './person-create.component.html',
  styleUrls: ['./person-create.component.scss'],
 
})

export class PersonCreateComponent implements OnInit {

  person: Person = {
    
fullName: '',
cpf:'',
email:'',
birthday:'',
gender: 0,
description:''

};

  constructor(private PersonService: PersonService,
    private router: Router) { }

  ngOnInit(): void {

  }

  createPerson():void{
    console.log(this.person.birthday)
    const dateFormat =  format(parseISO(this.person.birthday),'dd/MM/yyyy')
    this.person.birthday= dateFormat,
    console.log(" esse e a data" + this.person.birthday)
    this.PersonService.create(this.person).subscribe(()=>{
      this.PersonService.showMessage('Cadastro feito com sucesso!')
      this.router.navigate(['/persons'])
    })
  }

  cancel():void{
    this.router.navigate(['/persons'])
  }

}
