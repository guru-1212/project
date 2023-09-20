import { Component, OnInit } from '@angular/core';
import { StudentDataService } from '../student-data.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit{
  constructor(private studentData : StudentDataService){}
  studentList : any
  ngOnInit(): void {
      this.studentData.getStudentData().subscribe(data=>{
        this.studentList = data
      })
  }
}
