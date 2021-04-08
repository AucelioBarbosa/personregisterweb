import { ActivatedRoute, Router } from '@angular/router';
import { PersonService } from '../../../services/person.service';
import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/components/person/Person.model';

@Component({
  selector: 'app-person-delete',
  templateUrl: './person-delete.component.html',
  styleUrls: ['./person-delete.component.scss']
})
export class PersonDeleteComponent implements OnInit {

person!: Person;


  constructor(
     private personService: PersonService,
     private router : Router, 
     private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id') || null;
    this.personService.readById(id).subscribe(person =>{
      this.person = person
    })
  }

  deletePerson(): void{
  this.personService.delete(this.person.id).subscribe(() =>{
    this.personService.showMessage('Cadastro excluido com sucesso!')
    this.router.navigate(['/persons'])
  })

  }

  cancel(): void{
    this.router.navigate(['/persons'])
  }

}
