import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

declare var $: any;
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  username: string;
  password: string;

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    /**
 * Variables
 */
    const signupButton = document.getElementById("signup-button"),
      loginButton = document.getElementById("login-button"),
      userForms = document.getElementById("user_options-forms");

    /**
    * Add event listener to the "Sign Up" button
    */
    signupButton.addEventListener(
      "click",
      () => {
        userForms.classList.remove("bounceRight");
        userForms.classList.add("bounceLeft");
      },
      false
    );

    /**
    * Add event listener to the "Login" button
    */
    loginButton.addEventListener(
      "click",
      () => {
        userForms.classList.remove("bounceLeft");
        userForms.classList.add("bounceRight");
      },
      false
    );

  }



  login() {
    if (this.username === "admin@gmail.com" && this.password === "admin") {
      this.router.navigateByUrl('/dashboard')
      console.log(true);
    }
    else {
      alert("Please check your Email and Password");
    }
  }

}
