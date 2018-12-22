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
export class FordCarApiServices {

    constructor(private http:HttpClient) {}

    public getAllFordCars(){ console.log("inside");
      //const csUser = localStorage.getItem('csUser');
      //httpOptions.headers = httpOptions.headers.set('Authorization', csUser);
      let fordCarsUrl: string = ApiEndpoints.getAllFordCars;

       let valu = this.http.get(fordCarsUrl);

       return this.http.get(fordCarsUrl);
    }
}
