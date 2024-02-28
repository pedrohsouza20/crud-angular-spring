import { Component } from '@angular/core';

import { Course } from '../model/course';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss'
})

export class CoursesComponent {
  courses: Course[] = [
    {
      _id: "1",
      name: "Angular",
      category: "Front-end"
    }
  ];
  displayedColumns = ['name', 'category'];

  constructor(){
  }

}
