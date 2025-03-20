import PercentageBar from './percentage-bar';

interface ComparisonAnswerProps {
  questionText: string;
  answers: string[];
  mySelection: string;
  opponentSelection: string;
  percentage: number[];
}

function ComparisonAnswer({
  questionText,
  answers,
  mySelection,
  opponentSelection,
  percentage,
}: ComparisonAnswerProps) {
  return (
    <div className='flex w-full flex-col gap-4'>
      <p className='text-medium-01 text-gray-10'>{questionText}</p>
      <div className='flex w-full items-end gap-8'>
        <p className='flex shrink-0 flex-col items-center'>
          <span className='text-title-02'>
            {mySelection === opponentSelection ? '🤩' : '😭'}
          </span>
          <span className='text-caption-01 text-primaryVariant'>
            {mySelection === opponentSelection ? '일치해요!' : '달라요..'}
          </span>
        </p>
        <div className='flex basis-full flex-col gap-4'>
          <div className='flex w-full flex-col gap-4'>
            <div className='flex w-full'>
              {answers.map((answer, idx) => (
                <div key={idx} className='flex flex-1 justify-center'>
                  <span
                    className={`h-20 rounded-32 border border-primaryVariant bg-white px-8 text-caption-01 text-primaryVariant ${answer === opponentSelection || 'hidden'}`}
                  >
                    친구
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className='flex h-36 w-full rounded-8 border border-primaryVariant shadow-elevation1'>
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
        </div>
      </div>
      <PercentageBar percentage={percentage} />
    </div>
  );
}

export default ComparisonAnswer;
