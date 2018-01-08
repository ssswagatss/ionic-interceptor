import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  message: string = "Hello and welcome";
  constructor(public navCtrl: NavController, public http: HttpClient) {
    this.http.get('http://ionicmobile.azurewebsites.net/api/Project/GetProjectByUserId?UserId=552383dc-cf67-4a3b-b154-899f702757a0')
      .subscribe(
      data => console.log("Data", data),
      err => console.log("Error", err)
      );
  }

}
