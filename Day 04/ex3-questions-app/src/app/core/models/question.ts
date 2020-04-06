export interface Question {
    caption: string;
    answers: string[];
    correctAnswerIndex: number;
    userAnswerIndex: number | null;
}