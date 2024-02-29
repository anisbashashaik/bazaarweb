import { Component, OnInit } from '@angular/core';
import { Employee } from '../../entities/employee';
import { EmployeeService } from '../../services/employee.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {

  id!: number;
  employee: Employee = new Employee();

  constructor(private employeeService : EmployeeService,
    private route : ActivatedRoute, private router : Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.employeeService.getEmployeeById(this.id).subscribe(
      data => {
        this.employee = data;
      },
      error => console.log(error)    
    );
  }

  onSubmit (): void {
    console.log(this.employee);
    this.employeeService.updateEmployee(this.id, this.employee).subscribe(
      data => {
        this.gotoEmployeeList();
      }, 
      error => console.log(error)
    );
  }

  gotoEmployeeList(){
    this.router.navigate(['/employees']);
  }
}
