import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'figmaui';
  // isEdit: boolean = false;
  fullName!: string;
  class!: string;
  physics!: string;
  chemistry!: string;
  maths!: string;

  headers = [
    {
      name: 'Full Name',
      Class: 'Class',
      Physics: 'Physics',
      Chemistry: 'Chemistry',
      Maths: 'Maths',
      Action: 'Action',
    },
  ];
  students = [
    {
      id: 1,
      fullName: 'John Doe',
      class: 'Class 1',
      physics: '80',
      chemistry: '90',
      maths: '70',
      isEdit: false,
    },
    {
      id: 2,
      fullName: 'Jane Doe',
      class: 'Class 2',
      physics: '80',
      chemistry: '90',
      maths: '70',
      isEdit: false,
    },
    {
      id: 3,
      fullName: 'Jinnierick Doe',
      class: 'Class 1',
      physics: '80',
      chemistry: '90',
      maths: '70',
      isEdit: false,
    },
    {
      id: 4,
      fullName: 'rick Doe',
      class: 'Class 3',
      physics: '80',
      chemistry: '90',
      maths: '70',
      isEdit: false,
    },
    {
      id: 5,
      fullName: 'david Doe',
      class: 'Class 1',
      physics: '80',
      chemistry: '90',
      maths: '70',
      isEdit: false,
    },
  ];
  students1 = [];

  onEdit(student: any) {
    console.log('edit');
    student.isEdit = true;

    this.students1 = JSON.parse(JSON.stringify(student));
    console.log(this.students1);
  }

  onDelete(student: any) {
    console.log('delete', student);

    const newStudents = [];
    for (let i = 0; i < this.students.length; i++) {
      if (this.students[i].id !== student.id) {
        newStudents.push(this.students[i]);
      }
    }
    this.students = newStudents;
  }

  onSave(student: any) {
    console.log('saved');
    student.isEdit = false;
    this.fullName = student.fullName;
    this.class = student.class;
    this.physics = student.physics;
    this.chemistry = student.chemistry;
    this.maths = student.maths;
  }
  onCancel(student: any) {
    console.log('cancel');
    // Object.assign(student, this.students1);

    let copy = JSON.parse(JSON.stringify(this.students1));
    student.fullName = copy.fullName;
    student.class = copy.class;
    student.physics = copy.physics;
    student.chemistry = copy.chemistry;
    student.maths = copy.maths;
    student.isEdit = false;
  }
}
