import { Person } from '../components/person/Person.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar'


@Injectable({
  providedIn: 'root'

})
export class PersonService {

  Url = 'http://localhost:8080/api/v1/person'

  constructor(private http: HttpClient,
    private snackBar: MatSnackBar){ }

  getPersons() : Observable<any>{
    return this.http.get(this.Url)
  }
  
  showMessage( msg: string):void{
    this.snackBar.open(msg,'X',{
      duration: 3000,
      horizontalPosition:"right",
      verticalPosition:"top"
    })
  }
  
  create(person: Person): Observable<Person>{
    return this.http.post<Person>(this.Url, person)
  }
  
  read(): Observable<Person[]>{
    return this.http.get<Person[]>(this.Url)
  }

  readById(id?: any): Observable<Person>{
    const url = `${this.Url}/${id}`
    return this.http.get<Person>(url)
  }

  update(person: Person): Observable<Person>{
    const url = `${this.Url}/${person.id}`
    return this.http.put<Person>(url,person)
  }

  delete( id: any): Observable<Person>{
    const url = `${this.Url}/${id}`
    return this.http.delete<Person>(url)
  }

}
