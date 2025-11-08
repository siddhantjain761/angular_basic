import { ApiPostComponent } from './api-post/api-post.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { RegestrationFormComponent } from './regestration-form/regestration-form.component';
import { ApiUpdateComponent } from './api-update/api-update.component';
import { ApiComponent } from './api/api.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {path:'',component:RegestrationFormComponent},
  {path:'update/:id',component:ApiUpdateComponent},
  {path:'display',component:ApiComponent},
  {path:'regester-terminal',component:ApiPostComponent},
  {path:'**',component:RegestrationFormComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
