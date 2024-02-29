import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { EmployeeListComponent } from './employee/components/employee-list/employee-list.component';
import { CreateEmployeeComponent } from './employee/components/create-employee/create-employee.component';
import { UpdateEmployeeComponent } from './employee/components/update-employee/update-employee.component';
import { EmployeeDetailsComponent } from './employee/components/employee-details/employee-details.component';

const routes: Routes = [
  {
    path: "register", component: RegisterComponent
  },
  {
    path: "login", component: LoginComponent
  },
  {
    path: "admin", loadChildren: () =>
      import("./admin/admin.module").then(m => m.AdminModule)
  },
  {
    path: "user", loadChildren: () =>
      import("./user/user.module").then(m => m.UserModule)
  },
  {
    path: "employees", component: EmployeeListComponent
  },
  {
    path: "create-employee", component: CreateEmployeeComponent
  },
  {
    path: "update-employee/:id", component: UpdateEmployeeComponent
  },
  {
    path: "employee-details/:id", component: EmployeeDetailsComponent
  }
  /*{
    path : '', redirectTo: 'employees', pathMatch : 'full'
  }*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
