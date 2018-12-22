/**
 * Created By : Ashok M Shetty
 */
 import { Component, OnInit } from '@angular/core';
 import {Validators, FormBuilder, FormGroup} from '@angular/forms';
 import { RouterModule, Routes ,Router,ActivatedRoute} from '@angular/router';

 import { ToastrService } from 'ngx-toastr';

 // Services
 import { StudentService } from '../../../services/student/student.service';
 import { routerTransition } from '../../../services/config/config.service';
 import { Constants } from '../../../constants/constants'
 import { FordCarApiServices } from '../../../services/apiServices/fordCarApiServices';
 import { CarDetails } from '../../../models/carDetails';

 @Component({
 	selector: 'app-student-list',
 	templateUrl: './student-list.component.html',
 	styleUrls: ['./student-list.component.css'],
 	animations: [routerTransition()],
 	host: {'[@routerTransition]': ''}
 })

 export class StudentListComponent implements OnInit {
 data1 = null;
 	studentList:any;
 	studentListData:any;
 	constructor(private studentService:StudentService,private toastr: ToastrService, private fordCarApiServices: FordCarApiServices) { }
 	// Call student list function on page load
 	ngOnInit() {
 	  this.getStudentList();
 	}
 //	ngOnInit() { console.log("ngInit");
   //       this.fordCarApiServices.getAllFordCars().subscribe(
   //         data => {
   //           this.data1 = data;
   //           console.log(data);
   //         }
   //       );
   //     }

 	// Get student list from services
 	getStudentList(){
 	  //let studentList = this.studentService.getAllStudents();
 	  this.fordCarApiServices.getAllFordCars().subscribe(
                data => {
                  let studentList = data;
                  this.success(studentList)
                  //console.log(data);
                }
              );

    //console.log(studentList);

 	}

 	// Get student list success
 	success(data){
 		this.studentListData = data;
 		for (var i = 0; i < this.studentListData.length; i++) {
 		console.log(this.studentListData[i]);
 			this.studentListData[i].name = this.studentListData[i].address +' '+ this.studentListData[i].last_name;
 		}
 	}

 	// Delete a student with its index
 	deleteStudent(index:number){
 		// get confirm box for confirmation
 		let r = confirm("Are you sure?");
 		if (r == true) {
 			let studentDelete = this.studentService.deleteStudent(index);
 			if(studentDelete) {
 				this.toastr.success("Success", "Student Deleted");
 			}
 			this.getStudentList();
 		}
 	}
 }
/**
 * Created By : Ashok M Shetty
 */
