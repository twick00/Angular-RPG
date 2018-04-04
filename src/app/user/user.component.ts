import { Component, OnInit, Injectable } from '@angular/core';
import { FirebaseListObservable, AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit {
  users: FirebaseListObservable<any[]>;
  constructor(private database: AngularFireDatabase) {
    this.users = database.list('users');
  }
  
  ngOnInit() {
  } 
}