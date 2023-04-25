import { Component, Input, OnInit, ViewChild } from '@angular/core';
import {
  FormsModule,
  FormControl,
  FormGroup,
  FormBuilder,
} from '@angular/forms';
import * as ApexCharts from 'apexcharts';
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexTitleSubtitle,
} from 'ng-apexcharts';
export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  title: ApexTitleSubtitle;
};
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  @ViewChild('chart') chart!: ChartComponent;
  public chartOptions: Partial<ChartOptions> | any;

  constructor() {
    this.chartOptions = {
      colors: ['#2A93DS', '#37CAEC', '#ADD9D8'],
      series: [
        {
          name: 'Physics',
          // type: 'column',
          data: this.students.map((student: any) => student.physics),
          // data: [80, 85, 70, 79, 89],
        },
        // {
        //   type: 'line',
        //   data: this.students.map((student: any) => student.physics),
        //   // data: [80, 85, 70, 79, 89],
        // },
        {
          name: 'Chemistry',
          data: this.students.map((student: any) => student.chemistry),
          // data: [70, 68, 60, 72, 82],
        },
        {
          name: 'Maths',
          data: this.students.map((student: any) => student.maths),
          // data: [68, 70, 82, 91, 73],
        },
      ],
      chart: {
        height: 350,
        type: 'bar',
      },
      legend: {
        show: true,
      },
      strok: {
        width: [0, 4, 5],
        curve: 'smooth',
      },
      title: {
        text: 'students marks',
      },
      xaxis: {
        categories: [
          'John Doe',
          'Jane Doe',
          'Jinnierick Doe',
          'Rick Doe',
          'David Doe',
        ],
      },
    };
  }
  title = 'figmaui';
  tableForm!: FormGroup;
  public student: any;

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
      chemistry: '70',
      maths: '68',
      isEdit: false,
    },
    {
      id: 2,
      fullName: 'Jane Doe',
      class: 'Class 2',
      physics: '85',
      chemistry: '68',
      maths: '70',
      isEdit: false,
    },
    {
      id: 3,
      fullName: 'Jinnierick Doe',
      class: 'Class 1',
      physics: '70',
      chemistry: '60',
      maths: '82',
      isEdit: false,
    },
    {
      id: 4,
      fullName: 'Rick Doe',
      class: 'Class 3',
      physics: '79',
      chemistry: '72',
      maths: '91',
      isEdit: false,
    },
    {
      id: 5,
      fullName: 'David Doe',
      class: 'Class 1',
      physics: '89',
      chemistry: '82',
      maths: '73',
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

    student.fullName = this.tableForm.value.fullName;
    student.class = this.tableForm.value.class;
    student.physics = this.tableForm.value.physics;
    student.chemistry = this.tableForm.value.chemistry;
    student.maths = this.tableForm.value.maths;
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
