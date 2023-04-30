import { Component } from '@angular/core';
import { Employee } from './models/employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public employees: Employee[] = [
    {
      id: 1,
      name: 'Juan Carlos',
      country: 'Bolivia'
    },
  ];

  public currentEmployee: Employee = new Employee();

  saveOrUpdate(): void {
    if (this.currentEmployee.id === 0) {
      this.currentEmployee.id = this.employees.length + 1;
      this.employees.push(this.currentEmployee);
    }
    this.clean();
  }

  selectEmployee(employee: Employee) {
    this.currentEmployee = employee;
  }
  delete(): void {
    if (confirm('Estas seguro que desea eliminar este empleado?')) {
      this.employees = this.employees.filter(employee => this.currentEmployee.id !== employee.id);
      this.clean();
    }
  }

  clean():void{
    this.currentEmployee = new Employee();
  }

}
