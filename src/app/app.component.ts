import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'appCompras';
  ngOnInit () {
    firebase.default.initializeApp({
    apiKey: 'AIzaSyAPqyU1vSDVahWKB1jln0N6Vkmvnh7ekac',
    authDomain: 'comprasapp-584bd.firebaseio.com'
    });
    }
}
