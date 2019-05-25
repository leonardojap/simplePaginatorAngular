//dependecies
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { HttpErrorResponse, HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  //our base url
  url = "https://reqres.in/api/users";

  constructor(public http:HttpClient) { 

  }

  //to get list paginated by number page
  getListUser(page:number){
    return this.http.get(this.url+"?page="+page).pipe(catchError(this.handleError)); 
  }

  getUserDetail(id:string){
    return this.http.get(this.url+"/"+id).pipe(catchError(this.handleError));
  }

  //to manage erros in request...
  public handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(
      'Something bad happened; please try again later.');
  };
}
