import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loading: boolean = false;
  returnUrl: string = '/dashboard/ecommerce';
  loginForm!: FormGroup;
  formSubmitted: boolean = false;
  error: string = '';

  showPassword: boolean = false;

  constructor (
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
  ){}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['shreyu@coderthemes.com', [Validators.required, Validators.email]],
      password: ['test', Validators.required]
    });
  }

  /**
  * convenience getter for easy access to form fields
  */
  get formValues() { return this.loginForm.controls; }


}
