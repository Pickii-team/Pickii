import React from 'react';
import DefaultAnswer from './default-answer';
import ComparisonAnswer from './comparison-answer';

export default function AnswerSection() {
  return (
    <section className='mb-80 flex basis-full flex-col items-center px-16'>
      {/* 기본 ver */}
      <DefaultAnswer
        questionText='Q1. 복숭아'
        answers={['물복', '딱복']}
        mySelection='딱복'
        percentage={[60, 40]}
      />
      {/* 비교 ver */}
      <ComparisonAnswer
        questionText='Q1. 복숭아'
        answers={['물복', '딱복']}
        mySelection='딱복'
        opponentSelection='딱복'
        percentage={[60, 40]}
      />
    </section>
  );
}
