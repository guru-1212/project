import { Component, OnInit } from '@angular/core';
import { StudentDataService } from '../student-data.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.scss']
})
export class AddStudentComponent  {

  constructor(private saveStudentData : StudentDataService) {
    
  }
 
  stdData :any
  addStudent(data:any){
   this.stdData = data
   this.saveStudentData.addStudent(this.stdData).subscribe();
   alert("Data saved successfully")
  }
  
  

}
