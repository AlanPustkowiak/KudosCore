import { Component, inject, OnInit, signal } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { KudosService } from '../../services/kudos.service';
import { EmployeeService } from '../../services/employee.service';
import { Router } from '@angular/router';
import { Employee } from '../../models/employee.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-points-add',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './points-add.html',
  styleUrl: './points-add.scss',
})
export class PointsAdd implements OnInit {
  pointsForm!: FormGroup;

  private employeeService = inject(EmployeeService);
  private kudosService = inject(KudosService);
  private router = inject(Router);
  private formBuilder = inject(FormBuilder);

  isSubmitting = signal(false);
  employees$ = this.employeeService.getEmployees();

  constructor() {}

  ngOnInit(): void {
    this.initForm();
  }

  private initForm(): void {
    this.pointsForm = this.formBuilder.group({
      employeeId: ['', Validators.required],
      points: ['', [Validators.required, Validators.min(1)]],
      comment: ['', Validators.required],
    });
  }

  isFieldInvalid(fieldName: string): boolean {
    const field = this.pointsForm.get(fieldName);
    return !!(field && field.invalid && (field.dirty || field.touched));
  }

  onSubmit(): void {
    if (this.pointsForm.valid) {
      this.isSubmitting.set(true);
      const formValue = this.pointsForm.value;

      const selectedEmployee = this.employees$().find(
        (emp) => emp.id === +formValue.employeeId
      );

      const newKudos = {
        to: selectedEmployee ? selectedEmployee.name : 'Unknown',
        from: 'System',
        comment: formValue.comment,
        points: formValue.points,
      };
      this.kudosService.addKudos(newKudos);
      this.isSubmitting.set(false);
      this.router.navigate(['/points-list']);
    }
  }

  onCancel(): void {
    this.router.navigate(['/points-list']);
  }
}
