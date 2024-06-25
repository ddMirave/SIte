export interface Exercise {
    id: string;
    answers: { content: string }[];
    trueAnswer: string;
    category: string;
    userAnswer?: string; // Добавленное свойство для хранения выбранного ответа
  }