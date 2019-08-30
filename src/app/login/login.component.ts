import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  onSubmit(data:NgForm){
    console.log(data.value);

    if(data.value.name=="admin" && data.value.pass=="1234"){
      localStorage.setItem('loggedIn','true');
      console.log("true");
      this.router.navigateByUrl('welcome')
    }
    else{
    console.log("false");
    }
  }

  constructor(private router:Router) { }
  
  ngOnInit() {
  }

}
