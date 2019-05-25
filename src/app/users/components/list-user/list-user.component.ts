import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models/Users';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss']
})
export class ListUserComponent implements OnInit {

  //number page
  page:number;

  //list users to show
  listUsers:User[];


  constructor(public serviceUser:UserService, public router:Router) {
    //at begin we start with the first page
    this.page = 1;

    //start array users empty
    this.listUsers = [];

    //get the list of users
    this.getList();
  }

  ngOnInit() {
  }

  //to get list users by page number
  getList(){
    this.serviceUser.getListUser(this.page).subscribe((data:any)=>{
      this.listUsers = data.data;
    });
  }

  //to go to the next page
  nextPage(){
    //set a limit to the max page, because the server has an error after page 4..
    if(this.page <4){      
      //increas page +1
      this.page += this.page;
      this.getList();
    }
  }

  previousPage(){
    //to search only real numbers (not: 0, -1, -2...)
    if(this.page > 1){
      this.page -= 1;
      this.getList();
    }
  }

  showUser(id){
    this.router.navigate(["/user/"+id]);
  }
}
