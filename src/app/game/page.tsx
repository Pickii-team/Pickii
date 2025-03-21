'use client';

import Button from '@/src/components/Button';
import ProgressBar from '@/src/containers/game/ProgressBar';
import Question from '@/src/containers/game/Question';
import { useState } from 'react';
import { QUESTIONS } from '@/src/lib/mockData';

export default function Game() {
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
  const currentQuestion = QUESTIONS[currentQuestionIdx];
  const [answer, setAnswer] = useState({
    id: 0,
    sessionId: 0,
    questionId: 0,
    selected: '',
  });

  const handleAnswer = (selected: string) => {
    setAnswer((prevA) => ({ ...prevA, selected }));
  };
  return (
    <div className='flex h-full flex-col justify-between px-16 py-16'>
      <div>
        <div className='mb-30'>
          <ProgressBar nowStep={currentQuestionIdx + 1} totalStep={10} />
        </div>
        <Question
          questionText={currentQuestion.question_text}
          answerA={currentQuestion.answer_a}
          answerB={currentQuestion.answer_b}
          answerADesc={currentQuestion.answer_a_desc}
          answerBDesc={currentQuestion.answer_b_desc}
          answer={answer}
          onAnswer={handleAnswer}
        />
      </div>

      <Button variant='filled' buttonColor='primary-variant' disabled>
        다음
      </Button>
    </div>
  );
}
