/**
 * Created By : Ashok M Shetty
 */

import { Injectable }     from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot }    from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../../models/user';
import { Constants } from '../../constants/constants'
import { ApiEndpoints } from '../../constants/apiEndpoints'
import 'rxjs/add/operator/toPromise';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  }),
  withCredentials: true
};

@Injectable()
export class AuthService implements CanActivate {

	constructor(private router: Router) {}

	canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
		let url: string = state.url;

		if (localStorage.getItem('userData')) {
			return true;
		}else {
			this.router.navigate(['/login']);
			return false;
		}
	}

	//private headers: Headers = new Headers({'Content-Type': 'application/json'});
    //constructor(private http: HttpClient) {}
    //login(user: User): Promise<any> {
    //  let url: string = Constants.getServerUrl(ApiEndpoints.login);
    //  return this.http.post(url, user, httpOptions).toPromise();
    //}
}

/**
 * Created By : Ashok M Shetty
 */
