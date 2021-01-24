import React from "react";
import { IUserAnswer } from ".";

interface IQuestionCardProps {
  question: string;
  answers: Array<string>;
  userClicked?: boolean;
  userAnswer: IUserAnswer | undefined;
  callback: any;
  questionNr: number;
  totalQuestionNr: number;
}
const QuestionCard: React.FC<IQuestionCardProps> = ({
  question,
  answers,
  userClicked,
  userAnswer,
  callback,
  questionNr,
  totalQuestionNr,
}) => {
  return (
    <div>
      <p>
        question: {questionNr} / {totalQuestionNr}
      </p>
      <p dangerouslySetInnerHTML={{ __html: question }} />
      <div>
        {answers.map((an) => (
          <div key={an}>
            <button className="option" onClick={callback} value={an} disabled={userClicked}>
              <span  dangerouslySetInnerHTML={{ __html: an }} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuestionCard;
