import { QUESTIONS_STAT } from '@/src/lib/mockData';
import QuestionStat from '.';

interface Props {
  questions: any[];
}
export default function QuestionStatList({ questions }: Props) {
  return (
    <div className='flex gap-20'>
      {questions.map((question) => {
        const currentQuestion = QUESTIONS_STAT.filter(
          (stat) => stat.questionId === question.id,
        )[0];

        return (
          <QuestionStat
            questionText={question.question_text}
            winningImageSrc={question.answer_a_img}
            imgArt={question.answer_a}
            totalVotesA={currentQuestion.totalVotesA}
            totalVotesB={currentQuestion.totalVotesB}
            key={question.id}
          />
        );
      })}
    </div>
  );
}
