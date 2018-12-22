/**
 * Created By : Ashok M Shetty
 */

 import { Component, OnInit } from '@angular/core';
 import { ToastrService } from 'ngx-toastr';

 // Services
 import { StudentService } from '../../services/student/student.service';
 import { routerTransition } from '../../services/config/config.service';
 import { FordCarApiServices } from '../../services/apiServices/fordCarApiServices';

 @Component({
 	selector: 'app-fordcar-details',
 	templateUrl: './fordCarDetails.component.html',
 	styleUrls: ['./fordCarDetails.component.css'],
 	animations: [routerTransition()],
 	host: {'[@routerTransition]': ''}
 })

 export class FordCarDetails implements OnInit {
  data1 = null;
 	studentList:any;
 	studentListData:any;
 	constructor(private fordCarApiServices: FordCarApiServices) { }

 	// Call student list function on page load
 		ngOnInit() { console.log("ngInit");
        this.fordCarApiServices.getAllFordCars().subscribe(
          data => {
            this.data1 = data;
            console.log(data);
          }
        );
      }

 	// Get student list from services

 }
/**
 * Created By : Ashok M Shetty
 */
