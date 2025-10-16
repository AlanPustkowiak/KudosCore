import { Injectable, signal } from '@angular/core';
import { Employee } from '../models/employee.model';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private employees = signal<Employee[]>([
    { id: 1, name: 'Jan Kowalski' },
    { id: 2, name: 'Anna Nowak' },
    { id: 3, name: 'Piotr Wiśniewski' },
    { id: 4, name: 'Katarzyna Wójcik' },
    { id: 5, name: 'Andrzej Kamiński' },
  ]);

  getEmployees() {
    return this.employees;
  }

  getEmployeeById(id: number): Employee | undefined {
    return this.employees().find((emp) => emp.id === id);
  }
}
