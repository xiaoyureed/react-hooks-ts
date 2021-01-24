export enum Difficulty {
  EASY = "easy",
  MEDIUM = "medium",
  HARD = "hard",
}

interface Question {
  category: string;
  correct_answer: string;
  difficulty: string;
  incorrect_answers: string[];
  question: string;
  type: string;
}

export type QuestionDisplay = Question & { answers: string[] };

export const fetchQuestions = async (
  amount: number,
  difficulty: Difficulty
) => {
  const endpoint = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`;
  const data = await (await fetch(endpoint)).json();
  return data.results.map((q: Question) => ({
    ...q,
    answers: shuffleArr([...q.incorrect_answers, q.correct_answer]),
  }));
};

/**
 * 打乱顺序
 * @param arr target array
 */
export const shuffleArr = (arr: any[]) => {
  return [...arr].sort(() => Math.random() - 0.5);
};
