import { Component, ViewChild, ElementRef, OnInit, Input, OnChanges } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, FormControl } from '@angular/forms';

import { PatientRegistration } from '../../../models/patientRegistration';
 import { ToastrService } from 'ngx-toastr';
// Services
 import { routerTransition } from '../../../services/config/config.service';
 import { Constants } from '../../../constants/constants'
 import { AuthService } from '../../../services/auth/auth.service';
 import { PatientRegistrationService } from '../../../services/patientRegistration/patientRegistrationService';

@Component({
  selector: 'app-view-patient',
  templateUrl: './view-patient.component.html',
  styleUrls: ['./view-patient.component.css'],
  animations: [routerTransition()],
   	host: {'[@routerTransition]': ''}
})
export class ViewPatientComponent implements OnInit {
    patientList:any;
    patientListData:any;
    constructor(private toastr: ToastrService, private patientRegistrationService: PatientRegistrationService) { }

    ngOnInit() {
        this.patientRegistrationService.getPatientDetails().subscribe(
          data => {
            let patientList = data;
            this.success(patientList);
          }
        );
    }

    success(data){
     		this.patientListData = data;
     		for (var i = 0; i < this.patientListData.length; i++) {
     			this.patientListData[i].name = this.patientListData[i].address +' '+ this.patientListData[i].last_name;
     		}
    }
}

