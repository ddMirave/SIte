import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss']
})
export class DynamicFormComponent implements OnInit {
  dynamicForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.dynamicForm = this.fb.group({
      answers: this.fb.array([this.createAnswer()])
    });
  }

  get answers(): FormArray {
    return this.dynamicForm.get('answers') as FormArray;
  }

  createAnswer(): FormGroup {
    return this.fb.group({
      answer: [''] // Инициализируйте с пустым значением
    });
  }

  addAnswer() {
    this.answers.push(this.createAnswer());
  }

  removeAnswer(index: number) {
    this.answers.removeAt(index);
  }
}