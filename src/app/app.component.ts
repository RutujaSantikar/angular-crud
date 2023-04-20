import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'figmaui';
  // isEdit: boolean = false;

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
      fullName: 'John Doe',
      class: 'Class 1',
      physics: '80',
      chemistry: '90',
      maths: '70',
      isEdit: false,
    },
    {
      fullName: 'Jane Doe',
      class: 'Class 2',
      physics: '80',
      chemistry: '90',
      maths: '70',
      isEdit: false,
    },
    {
      fullName: 'Jinnierick Doe',
      class: 'Class 1',
      physics: '80',
      chemistry: '90',
      maths: '70',
      isEdit: false,
    },
    {
      fullName: 'rick Doe',
      class: 'Class 3',
      physics: '80',
      chemistry: '90',
      maths: '70',
      isEdit: false,
    },
    {
      fullName: 'david Doe',
      class: 'Class 1',
      physics: '80',
      chemistry: '90',
      maths: '70',
      isEdit: false,
    },
  ];

  onEdit(student: any) {
    console.log('edit', student);
    // this.isEdit = true;
    student.isEdit = true;
    student.original = { ...student };
  }

  onDelete(student: any) {
    console.log('delete');
    this.students.splice(student, 1);
  }
  onSave(student: any) {
    console.log('saved');
    // this.isEdit = false;
    student.isEdit = false;
    delete student.original;
  }
  onCancel(student: any) {
    console.log('cancel');
    // this.isEdit = false;
    Object.assign(student, student.original);
    student.isEdit = false;
    delete student.original;
  }
}
