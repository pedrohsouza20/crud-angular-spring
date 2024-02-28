import { Component } from '@angular/core';

import { Course } from '../model/course';
import { CoursesService } from '../services/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss',
})
export class CoursesComponent {
  courses: Course[];
  displayedColumns = ['name', 'category'];

  constructor(private coursesService: CoursesService) {
    this.courses = this.coursesService.list();
  }
}
