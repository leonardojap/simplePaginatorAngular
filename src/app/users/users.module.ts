//deendecies
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; import { HttpModule } from '@angular/http';

//import router dependecies
import { Routes, RouterModule } from '@angular/router';
import { UsersRoutingModule } from './users-routing.module';

//components
import { UsersComponent } from './users.component';
import { ListUserComponent } from './components/list-user/list-user.component';
import { DetailUserComponent } from './components/detail-user/detail-user.component';
import { UserService } from './services/user.service';

//our routes
let routes:Routes = [
  {
    path:"",
    component:UsersComponent,
    children:[
      {
        path:"list",
        component: ListUserComponent
      },
      {
        path: "user/:id",
        component:DetailUserComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    UsersRoutingModule,
    RouterModule.forChild(routes),
    FormsModule,
    HttpClientModule
  ],
  declarations: [
    UsersComponent,
    ListUserComponent,
    DetailUserComponent
  ],
  providers:[UserService]
})
export class UsersModule { }
