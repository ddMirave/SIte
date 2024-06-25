import { Injectable } from "@angular/core";
import { tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { UserForRegister } from "./interfaces/userForRegister";
import { UserForLogin } from "./interfaces/userForLogin";
import { Token } from "./interfaces/token";
import { TokenStorageService } from './TokenStorageService';

@Injectable({providedIn: 'root'})
export class UserService{
    constructor(private http: HttpClient,
      private tokenStorageService: TokenStorageService
    ){}

    static token: string;
    readonly ROOT_URL = 'http://79.174.94.77:8080/api/';
    
    registerUser(user: UserForRegister) : Observable<UserForRegister>{
        return this.http.post<UserForRegister>(this.ROOT_URL + "authentication/registration", user); 
    };

    loginUser(user: UserForLogin) : Observable<Token> {
      return this.http.post<Token>(this.ROOT_URL + "authentication/login", user).pipe(
          tap((token: Token) => {
              // Сохраняем токен и роль после успешного входа
              this.tokenStorageService.saveToken(token.token);
              if (token.role) {
                  this.tokenStorageService.saveRole(token.role); // Сохраняем роль
                  console.log('Role:', token.role); // Пример вывода роли в консоль
              }
          })
      );
  }

  
getAllExercises(): Observable<any[]> {
  const storedToken = this.tokenStorageService.getToken();
  const headers = new HttpHeaders({
    'Accept': '*/*',
    'Authorization': `Bearer ${storedToken}`
  });

  return this.http.get<any[]>(`${this.ROOT_URL}exercise`, { headers });
}

    getExercisesByCategory(category: string): Observable<any[]> {
      const storedToken = this.tokenStorageService.getToken();
      const headers = new HttpHeaders({
        'Accept': '*/*',
        'Authorization': `Bearer ${storedToken}`
      });

      return this.http.get<any[]>(`${this.ROOT_URL}exercise/exercises-by-category?category=${encodeURIComponent(category)}`, { headers });
    }


    checkAnswers(category: string, userAnswers: string[]): Observable<any> {
      const storedToken = localStorage.getItem('token'); // Предполагается, что токен хранится в localStorage
      const headers = new HttpHeaders({
        'Authorization': `Bearer ${storedToken}`,
        'Content-Type': 'application/json' // Изменено значение Content-Type
      });
    
      const requestBody = JSON.stringify(userAnswers); // Конвертируем массив ответов в строку JSON
    
      return this.http.post<any>(`${this.ROOT_URL}exercise/check-exercises?category=${encodeURIComponent(category)}`, requestBody, { headers });
    }


    createExercise(exerciseData: any): Observable<any> {
      const storedToken = this.tokenStorageService.getToken();
      const headers = new HttpHeaders({
        'Accept': '*/*',
        'Authorization': `Bearer ${storedToken}`,
        'Content-Type': 'application/json'
      });
    
      return this.http.post<any>(`${this.ROOT_URL}exercise/create-exercise`, exerciseData, { headers });
    }

    deleteExercise(id: string): Observable<any> {
      const storedToken = this.tokenStorageService.getToken();
      const headers = new HttpHeaders({
        'Accept': '*/*',
        'Authorization': `Bearer ${storedToken}`,
      });
    
      return this.http.delete(`${this.ROOT_URL}exercise/${id}`, { headers });
    }

    updateExercise(exerciseId: string, exerciseData: any): Observable<any> {
      const storedToken = this.tokenStorageService.getToken();
      const headers = new HttpHeaders({
        'Accept': '*/*',
        'Authorization': `Bearer ${storedToken}`,
        'Content-Type': 'application/json'
      });

      return this.http.put<any>(`${this.ROOT_URL}exercise/${exerciseId}`, exerciseData, { headers });
    }
}