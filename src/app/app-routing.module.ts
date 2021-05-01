import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoComponent } from './Todos/todo/todo.component';

const routes: Routes = [
  // { path: '', component: HomeComponent, pathMatch: 'full' },
  // { path: 'counter', component: CounterComponent },
  // { path: 'fetch-data', component: FetchDataComponent },
  // { path: 'Employees',  component: EmployeeComponent}
  { path: 'ToDO',component:TodoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
