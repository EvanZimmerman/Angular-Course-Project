import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor() {}

  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyCRfNwUr1IfWi_GvIQIKshulFkLFi5IfsI",
      authDomain: "ng-recipe-book-9fafe.firebaseapp.com"
    });
  }
}
