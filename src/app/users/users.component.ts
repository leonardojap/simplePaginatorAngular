import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  userSelected = false;
  constructor(public router: Router) { }

  ngOnInit() {
    //we start the page in list
    this.router.navigate(["/list"]);
  }

}
