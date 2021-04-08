import { PersonDeleteComponent } from './components/person/person-delete/person-delete.component';
import { PersonUpdateComponent } from './components/person/person-update/person-update.component';
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { PersonCrudComponent } from './views/person-crud/person-crud.component';
import { PersonCreateComponent }from './components/person/person-create/person-create.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent

  },
  {
    path: "persons",
    component: PersonCrudComponent
  },
  {
    path: "persons/create",
    component: PersonCreateComponent
  },
  {
    path: "persons/update/:id",
    component: PersonUpdateComponent
  }, 
  {
  path: "persons/delete/:id",
  component: PersonDeleteComponent
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
