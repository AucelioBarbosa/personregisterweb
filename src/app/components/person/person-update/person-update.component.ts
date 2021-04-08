import { PersonService } from '../../../services/person.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Person } from 'src/app/components/person/Person.model';
import * as moment from 'moment';



@Component({
  selector: 'app-person-update',
  templateUrl: './person-update.component.html',
  styleUrls: ['./person-update.component.scss']
})
export class PersonUpdateComponent implements OnInit {

  
  person: Person = {
    
    fullName: '',
    cpf:'',
    email:'',
    birthday:'',
    gender: 0,
    description:''
    
    };


  constructor(
    private personService : PersonService,
    private router : Router, 
    private route : ActivatedRoute 
    ) {}

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id') || null;
    this.personService.readById(id).subscribe(person =>{
      this.person = person
    })
  }


  updatePerson(): void{
    console.log(this.person)
    const dateFormat: moment.Moment = moment.utc(this.person.birthday).local();
    this.person.birthday= dateFormat.format("DD/MM/YYYY"),
    this.personService.update(this.person).subscribe(() => {
      this.personService.showMessage('Cadastro Autalizado com sucesso!')
      this.router.navigate(['/persons'])
    })  
  }

  cancel(): void{
    this.router.navigate(['/persons'])
  }

}
