import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';
import { Exercise } from 'src/app/interfaces/exercise';

@Component({
  selector: 'app-theme8-page',
  templateUrl: './theme8-page.component.html',
  styleUrls: ['./theme8-page.component.scss']
})
export class Theme8PageComponent {
  showModal = false; // Предполагается, что это было добавлено на основе предыдущих инструкций
  exercises: Exercise[] = [];
  result: string = ''; // Переменная для сохранения результата проверки ответов
  num = 0;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.loadExercises();
  }

  loadExercises() {
    this.userService.getExercisesByCategory('антонимнт').subscribe(data => {
      this.exercises = data.map(item => ({
     ...item,
        userAnswer: null // Инициализация userAnswer как null
      }));
    });
  }
  checkAnswersAndUpdateState() {
    const userAnswers = this.exercises.map((exercise: Exercise) => exercise.userAnswer || '').filter(Boolean);
    this.userService.checkAnswers('антонимнт', userAnswers).subscribe((response: any) => { // Укажите тип ответа
      this.result = response;
      this.showModal = true;
    }, (error: any) => { // Укажите тип ошибки
      console.error(error);
    });
  }
}