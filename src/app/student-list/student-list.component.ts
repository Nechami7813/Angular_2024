import { Component } from '@angular/core';
import { Student } from '../student.model';
@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  
})
export class StudentListComponent {
  students: Student[] = [
    { id: 1, name: "avi",avg:99,is_active: true},
    { id: 2, name: "dany" ,avg:88,is_active:false},
    { id: 3, name: "yossi",avg:95,is_active:true }];

  deleteStudent(student: Student) {
    let indexToDelete = this.students.indexOf(student);
    this.students.splice(indexToDelete, 1);
  }
}
