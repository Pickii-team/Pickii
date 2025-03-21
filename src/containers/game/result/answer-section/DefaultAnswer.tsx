import React from 'react';
import PercentageBar from './PercentageBar';

interface AnswerProps {
  questionText: string;
  answers: string[];
  mySelection: string;
  percentage: number[];
}

const DefaultAnswer: React.FC<AnswerProps> = ({
  questionText,
  answers,
  mySelection,
  percentage,
}) => (
  <div className='flex w-full flex-col gap-4'>
    <p className='text-medium-01 text-gray-10'>{questionText}</p>
    <div className='flex h-48 w-full rounded-8 border border-primaryVariant shadow-elevation1'>
      {answers.map((answer, index) => (
        <div
          key={answer}
          className={`flex basis-full items-center justify-center ${
            index === 0 ? 'rounded-l-8' : 'rounded-r-8'
          } ${
            answer === mySelection
              ? 'bg-primaryVariant text-secondary'
              : 'bg-white text-gray-6'
          }`}
        >
          {answer}
        </div>
      ))}
    </div>
    <PercentageBar percentage={percentage} />
  </div>
);

export default DefaultAnswer;
