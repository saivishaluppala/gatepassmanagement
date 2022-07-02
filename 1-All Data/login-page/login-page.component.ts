import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  constructor( private router: Router) { }

  ngOnInit(): void {
  }

  submit() {

    this.router.navigate(["student-dashboard"])
  }

  validate(){
    // @ts-ignore
    var usr= document.getElementById('username').value;
    // @ts-ignore
    var pwd= document.getElementById('password').value;
    if (usr=="hod" || usr=="security" || usr=="mentor"){
      if (pwd=="pwd"){
        this.submit()
        return true;
      }
      else{
        alert("Incorrect Password");
        return false;
      }
    }
    else{
      alert("Incorrect Login Details");
      return false;
    }
  }
}

