//dependecies
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//import router dependecies
import { Routes, RouterModule } from '@angular/router';

//principal component
import { AppComponent } from './app.component';

//our routes
let routes:Routes = [
  {
    path:"",
    loadChildren:'./users/users.module#UsersModule'
  }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
