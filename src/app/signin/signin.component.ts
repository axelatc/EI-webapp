import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {AuthenticationService} from "../authentication.service";
import {passwordMaxLength, PasswordValidators, usernameMaxLength, UsernameValidators} from "../validators";

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  formGroup = new FormGroup({
    username: new FormControl('', UsernameValidators),
    password: new FormControl('', PasswordValidators)
  })
  readonly usernameMaxLength = usernameMaxLength;
  readonly passwordMaxLength = passwordMaxLength;
  hidePassword = true;

  constructor(private authService: AuthenticationService) {
  }

  ngOnInit(): void {
  }

  signin() {
    if (this.formGroup.valid) {
      this.authService.signin({
        username: this.formGroup.get('username')!.value!,
        password: this.formGroup.get('password')!.value!
      }).subscribe(value => console.log(value))
    }
  }
}
