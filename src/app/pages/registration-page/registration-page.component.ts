import { Component } from '@angular/core';
import { of } from 'rxjs';
import { UserForRegister } from '../../interfaces/userForRegister';
import { UserService } from 'src/app/user.service';
import { Router } from '@angular/router'; // Импортируйте Router

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.scss']
})
export class RegistrationPageComponent {
  constructor(private router: Router, private userService: UserService){}

  userName : string = '';
  email : string = '';
  password : string = '';
  role : string = 'student';
  errorMessage: string = ''; // Добавляем переменную для хранения сообщения об ошибке

  user?: UserForRegister;

  createPostRegister(user: UserForRegister) : void  {
    this.userService.registerUser(user).subscribe(
      (response) => {
        console.log(response);
        this.router.navigate(['../']); // Переход осуществляется здесь, после успешного выполнения
      },
      (error : any) => {
        console.error(error);
        this.errorMessage = 'Пароль слишком короткий'; // Устанавливаем сообщение об ошибке
      }
    );
  }

  postRegister(){
    this.createPostRegister(
      this.user = {
        'userName' : this.userName,
        'password' : this.password,
        'email' : this.email,
        'role': this.role,
      });
  }
}
