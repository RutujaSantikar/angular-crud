import { Component, Input, OnInit } from '@angular/core';
import {
  FormsModule,
  FormControl,
  FormGroup,
  FormBuilder,
} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'figmaui';
  tableForm!: FormGroup;
  public student: any;
  constructor() {}
  ngOnInit(): void {
    this.student = {};
    this.tableForm = new FormGroup({
      fullName: new FormControl(),
      class: new FormControl(''),
      physics: new FormControl(''),
      chemistry: new FormControl(''),
      maths: new FormControl(''),
    });
  }

  // isEdit: boolean = false;
  // fullName!: string;
  // class!: string;
  // physics!: string;
  // chemistry!: string;
  // maths!: string;

  fullName: any;
  class: any;
  physics: any;
  chemistry: any;
  maths: any;

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
    this.tableForm = new FormGroup({
      fullName: new FormControl(student.fullName),
      class: new FormControl(student.class),
      physics: new FormControl(student.physics),
      chemistry: new FormControl(student.chemistry),
      maths: new FormControl(student.maths),
    });
    this.students1 = JSON.parse(JSON.stringify(student));
    // console.log(this.students1);
    // console.log(this.tableForm);
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
    // this.fullName = student.fullName;
    // this.class = student.class;
    // this.physics = student.physics;
    // this.chemistry = student.chemistry;
    // this.maths = student.maths;
    // this.tableForm.value.fullName = student.fullName;
    // this.tableForm.value.class = student.class;
    // this.tableForm.value.physics = student.physics;
    // this.tableForm.value.chemistry = student.chemistry;
    // this.tableForm.value.maths = student.maths;
    // console.log(this.tableForm.value);
    student.fullName = this.tableForm.value.fullName;
    student.class = this.tableForm.value.class;
    student.physics = this.tableForm.value.physics;
    student.chemistry = this.tableForm.value.chemistry;
    student.maths = this.tableForm.value.maths;

    // this.fullName = this.tableForm.value.fullName;
    // this.class = this.tableForm.value.class;
    // this.physics = this.tableForm.value.physics;
    // this.chemistry = this.tableForm.value.chemistry;
    // this.maths = this.tableForm.value.maths;
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
