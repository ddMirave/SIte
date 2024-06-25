import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Импортируйте Router
import { TokenStorageService } from 'src/app/TokenStorageService';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {

  selectedCategory: string = '';
  constructor(private router: Router, private tokenStorageService: TokenStorageService) {}

  exercise1(): void {
    this.selectedCategory = 'валъюр';
    const role = this.tokenStorageService.getRole(); // Используйте метод getRole для получения роли
    if (role === 'student' || role === 'Student') {
      this.router.navigate(['../theme1']);
    } else if (role === 'admin' || role === 'Admin') {
      this.router.navigate(['../Home-admin'], { queryParams: { category: this.selectedCategory } });
    } else {
      // Обработка случая, когда роль не определена
      console.error('Role is undefined');
      console.error(role);
    }
  }

  
  exercise2(): void {
    this.selectedCategory = 'пaдежт';
    const role = this.tokenStorageService.getRole(); // Используйте метод getRole для получения роли
    if (role === 'student' || role === 'Student') {
      this.router.navigate(['../theme2']);
    } else if (role === 'admin' || role === 'Admin') {
      this.router.navigate(['../Home-admin'], { queryParams: { category: this.selectedCategory } });
    } else {
      // Обработка случая, когда роль не определена
      console.error('Role is undefined');
      console.error(role);
    }
  }

  exercise3(): void {
    this.selectedCategory = 'прилагательнай';
    const role = this.tokenStorageService.getRole(); // Используйте метод getRole для получения роли
    if (role === 'student' || role === 'Student') {
      this.router.navigate(['../theme3']);
    } else if (role === 'admin' || role === 'Admin') {
      this.router.navigate(['../Home-admin'], { queryParams: { category: this.selectedCategory } });
    } else {
      // Обработка случая, когда роль не определена
      console.error('Role is undefined');
      console.error(role);
    }
  }

  exercise4(): void {
    this.selectedCategory = 'валрисьме';
    const role = this.tokenStorageService.getRole(); // Используйте метод getRole для получения роли
    if (role === 'student' || role === 'Student') {
      this.router.navigate(['../theme4']);
    } else if (role === 'admin' || role === 'Admin') {
      this.router.navigate(['../Home-admin'], { queryParams: { category: this.selectedCategory } });
    } else {
      // Обработка случая, когда роль не определена
      console.error('Role is undefined');
      console.error(role);
    }
  }

  exercise5(): void {
    this.selectedCategory = 'числительнай';
    const role = this.tokenStorageService.getRole(); // Используйте метод getRole для получения роли
    if (role === 'student' || role === 'Student') {
      this.router.navigate(['../theme5']);
    } else if (role === 'admin' || role === 'Admin') {
      this.router.navigate(['../Home-admin'], { queryParams: { category: this.selectedCategory } });
    } else {
      // Обработка случая, когда роль не определена
      console.error('Role is undefined');
      console.error(role);
    }
  }

  exercise6(): void {
    this.selectedCategory = 'глаголсь';
    const role = this.tokenStorageService.getRole(); // Используйте метод getRole для получения роли
    if (role === 'student' || role === 'Student') {
      this.router.navigate(['../theme6']);
    } else if (role === 'admin' || role === 'Admin') {
      this.router.navigate(['../Home-admin'], { queryParams: { category: this.selectedCategory } });
    } else {
      // Обработка случая, когда роль не определена
      console.error('Role is undefined');
      console.error(role);
    }
  }

  exercise7(): void {
    this.selectedCategory = 'пингтне';
    const role = this.tokenStorageService.getRole(); // Используйте метод getRole для получения роли
    if (role === 'student' || role === 'Student') {
      this.router.navigate(['../theme7']);
    } else if (role === 'admin' || role === 'Admin') {
      this.router.navigate(['../Home-admin'], { queryParams: { category: this.selectedCategory } });
    } else {
      // Обработка случая, когда роль не определена
      console.error('Role is undefined');
      console.error(role);
    }
  }

  exercise8(): void {
    this.selectedCategory = 'антонимт';
    const role = this.tokenStorageService.getRole(); // Используйте метод getRole для получения роли
    if (role === 'student' || role === 'Student') {
      this.router.navigate(['../theme8']);
    } else if (role === 'admin' || role === 'Admin') {
      this.router.navigate(['../Home-admin'], { queryParams: { category: this.selectedCategory } });
    } else {
      // Обработка случая, когда роль не определена
      console.error('Role is undefined');
      console.error(role);
    }
  }
  
  exercise9(): void {
    this.selectedCategory = 'валмельгакс';
    const role = this.tokenStorageService.getRole(); // Используйте метод getRole для получения роли
    if (role === 'student' || role === 'Student') {
      this.router.navigate(['../theme9']);
    } else if (role === 'admin' || role === 'Admin') {
      this.router.navigate(['../Home-admin'], { queryParams: { category: this.selectedCategory } });
    } else {
      // Обработка случая, когда роль не определена
      console.error('Role is undefined');
      console.error(role);
    }
  }
}