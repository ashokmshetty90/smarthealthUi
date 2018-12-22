/**
 * Created By : Ashok M Shetty
 */
import { Component, OnInit } from '@angular/core';
import {Validators, FormBuilder, FormGroup} from '@angular/forms';
import { RouterModule, Routes ,Router,ActivatedRoute} from '@angular/router';
import { ToastrService } from 'ngx-toastr';

// Services
import { ValidationService } from '../../../services/config/config.service';
import { routerTransition } from '../../../services/config/config.service';

import { Constants } from '../../../constants/constants'
import { PatientRegistrationService } from '../../../services/patientRegistration/patientRegistrationService';
import { PatientRegistration } from '../../../models/patientRegistration';

import { StudentService } from '../../../services/student/student.service';

const defaultPatient = {
  firstName:'',
  lastName:'',
  age:'',
  gender:'',
  mobileNumber:'',
  email:'',
  address:''
};

@Component({
 	selector: 'app-patientRegistration-add',
 	templateUrl: './patientRegistration-add.component.html',
   	styleUrls: ['./patientRegistration-add.component.css'],
 	animations: [routerTransition()],
 	host: {'[@routerTransition]': ''}
 })

export class PatientRegistrationComponent implements OnInit {

  patients = null;
  skuResource: PatientRegistration;
  count = 0;
  private patientAddForm : FormGroup;
 // <div [formGroup]="myGroup">
  //      <input formControlName="firstName">
  //    </div>

 //     In your class:

     // this.patientAddForm = new FormGroup({
     //    firstName: new FormControl()
     // });
      //console.log(this.patientAddForm);
  index:any;
  //patientRegistration: PatientRegistration;
  //patientRegistraion: PatientRegistration = new PatientRegistration();
  constructor(private patientRegistrationService: PatientRegistrationService,
  private formBuilder: FormBuilder,private router: Router,private studentService:StudentService, private route: ActivatedRoute,private toastr: ToastrService) {
      //this.patientAddForm = this.formBuilder.group({ });
      this.route.params.subscribe(params => { });
  }
  ngOnInit() {  console.log("inside");
    this.patientRegistrationService.getPatientDetails().subscribe(
      data => {
        this.patients = data
      });
  }

  addPatient(){
 console.log(this.skuResource);
   			 alert(this.patientAddForm.value); console.log(this.patientAddForm.value);
   // this.patientRegistrationService.addPatientDetails(this.patientAddForm).subscribe(
   //   data => {
   //     console.log(data);
   //    });
  }


 }

/**
 * Created By : Ashok M Shetty
 */
