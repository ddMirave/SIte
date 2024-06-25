import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserForLogin } from 'src/app/interfaces/userForLogin';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-sign-in-page',
  templateUrl: './sign-in-page.component.html',
  styleUrls: ['./sign-in-page.component.scss'],
})
export class SignInPageComponent {
  userName: string = '';
  password: string = '';
  errorMessage: string = ''; // Добавляем переменную для хранения сообщения об ошибке
  user?: UserForLogin;

  constructor(private userService: UserService, private router: Router){}

  createPostLogin(user: UserForLogin): void  {
    this.userService.loginUser(user).subscribe(
      (response) => {
        console.log(UserService.token = response.token);
        this.router.navigate(['../Home']);
        console.log(response.role);
      },
      (error : HttpErrorResponse) => {
        console.error(error);
        this.errorMessage = 'Логин или пароль не верный'; // Устанавливаем сообщение об ошибке
      }
    );
  }

  postLogin(){
    this.createPostLogin(
      this.user = {
        'userName' : this.userName,
        'password' : this.password,
      }
    )
  }

  onEnter() {
    this.postLogin();
  }
}
