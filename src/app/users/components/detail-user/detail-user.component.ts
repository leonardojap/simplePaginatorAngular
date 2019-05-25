import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service';
import { User } from '../../models/Users';

@Component({
  selector: 'app-detail-user',
  templateUrl: './detail-user.component.html',
  styleUrls: ['./detail-user.component.scss']
})
export class DetailUserComponent implements OnInit {
  
  //to storage the user id
  userId;

  //to set the data of user
  user:User;
  constructor(public activateRoute: ActivatedRoute, public serviceUser:UserService) {
    //here we get the id user to shoy data
    this.userId = activateRoute.snapshot.params['id'];
    
    //begin values of user default
    this.user = new User();
    this.user.avatar = "";
    this.user.email = "";
    this.user.first_name = "";
    this.user.id = 0;
    this.user.last_name = "";
    //here we make the serach to see the user data by id
    this.serviceUser.getUserDetail(this.userId).subscribe((data:any)=>{
      this.user = data.data;
    })
  }

  ngOnInit() {
  }

}
