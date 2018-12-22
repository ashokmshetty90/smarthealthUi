import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from "rxjs";
import { Constants } from '../../constants/constants'
import { ApiEndpoints } from '../../constants/apiEndpoints'
import { CarDetails } from '../../models/carDetails';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'testAuth'
  }),
  withCredentials: true,
  crossDomain: true
};

@Injectable()
export class PatientRegistrationService {

   constructor(private http:HttpClient) {}
    public getPatientDetails(){
      let patientDetails: string = ApiEndpoints.getAllPatientDetails;
      return this.http.get(patientDetails);
    }

    public addPatientDetails(patientDetails){ console.log("Inside PatientRegistration service");
      let addPatientUrl: string = ApiEndpoints.addPatientDetails;
      return this.http.post<String>(addPatientUrl,patientDetails);
    }
}
