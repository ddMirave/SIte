import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';
import { Exercise } from 'src/app/interfaces/exercise';


@Component({
  selector: 'app-theme3-page',
  templateUrl: './theme3-page.component.html',
  styleUrls: ['./theme3-page.component.scss']
})
export class Theme3PageComponent implements OnInit {
  showModal = false; // Предполагается, что это было добавлено на основе предыдущих инструкций
  exercises: Exercise[] = [];
  result: string = ''; // Переменная для сохранения результата проверки ответов
  num = 0;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.loadExercises();
  }

  loadExercises() {
    this.userService.getExercisesByCategory('прилагательнай').subscribe(data => {
      this.exercises = data.map(item => ({
     ...item,
        userAnswer: null // Инициализация userAnswer как null
      }));
    });
  }
  checkAnswersAndUpdateState() {
    const userAnswers = this.exercises.map((exercise: Exercise) => exercise.userAnswer || '').filter(Boolean);
    this.userService.checkAnswers('прилагательнай', userAnswers).subscribe((response: any) => { // Укажите тип ответа
      this.result = response;
      this.showModal = true;
    }, (error: any) => { // Укажите тип ошибки
      console.error(error);
    });
  }
}