import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router'; // Импортируйте ActivatedRoute и Router
import { Exercise } from 'src/app/interfaces/exercise';


@Component({
  selector: 'app-home-admin',
  templateUrl: './home-admin.component.html',
  styleUrls: ['./home-admin.component.scss']
})
export class HomeAdminComponent implements OnInit {
  public exercises$!: Observable<any[]>;
  public showModal = false; // Добавьте эту строку в начало класса HomeAdminComponent
  exercises: Exercise[] = [];
  public newExercise = {
    category: '',
    answers: [{ content: '' }],
    trueAnswer: ''
  };
  public editingExercise: any;
  public result: string = '';
  public deleteExerciseId: string = '';
  public selectedCategory: string = ''; // Переменная для хранения выбранной категории


  constructor(
    private userService: UserService,
    private route: ActivatedRoute, // Добавьте ActivatedRoute в качестве зависимости
    private router: Router // Убедитесь, что Router уже импортирован
  ) {}

  
  loadExercises() {
    this.userService.getExercisesByCategory(this.selectedCategory).subscribe(data => {
      this.exercises = data.map(item => ({
     ...item,
        userAnswer: null // Инициализация userAnswer как null
      }));
    });
  }
  
  ngOnInit() {
    this.exercises$ = this.userService.getAllExercises();
    
    this.route.queryParams.subscribe(params => {
      this.selectedCategory = params['category'] || '';
    });

    this.newExercise.category = this.selectedCategory;

    this.loadExercises();
  }
  
  addAnswer() {
    this.newExercise.answers.push({ content: '' }); // Добавляем новый пустой объект в массив answers
  }

  onSubmit() {
    this.userService.createExercise(this.newExercise)
   .subscribe(response => {
        console.log('Новое задание создано', response);
        this.exercises$ = this.userService.getAllExercises();
        this.loadExercises();
      }, error => {
        console.error('Ошибка создания задания', error);
      });
  }

  onDeleteExercise(exerciseId: string): void {
    if (!exerciseId) {
      alert('Пожалуйста, введите ID задания для удаления.');
      return;
    }
  
    this.userService.deleteExercise(exerciseId)
     .subscribe(() => {
        console.log(`Задание с ID ${exerciseId} было успешно удалено.`);
        // Обновите список заданий после удаления
        this.loadExercises(); // Предполагается, что метод loadExercises() обновляет список заданий
      }, error => {
        console.error('Ошибка удаления задания', error);
      });
  }


  
  selectExerciseToEdit(exerciseId: string) {
    if (!this.exercises$) {
      console.error('exercises$ is not initialized');
      return;
    }
    this.exercises$.subscribe(exercises => {
      this.editingExercise = exercises.find(exercise => exercise.id === exerciseId);
      this.checkAnswersAndUpdateState()
    });
  }
  
  updateExercise() {
    this.userService.updateExercise(this.editingExercise.id, this.editingExercise)
   .subscribe(response => {
          console.log('Задание обновлено', response);
          // После успешного обновления сбрасываем editingExercise
          this.loadExercises();
          this.editingExercise = null;
        }, error => {
          console.error('Ошибка обновления задания', error);
        });
  }

  addeditAnswer(index: number) {
    if (index === this.editingExercise.answers.length - 1) {
      this.editingExercise.answers.splice(index + 1, 0, { content: '' });
    }
  }
  
  deleteAnswer(index: number) {
    this.editingExercise.answers.splice(index, 1);
  }

  checkAnswersAndUpdateState() {

    this.showModal = true; // Открываем модальное окно
  }
  
}

