interface QuestionStatBarProps {
  answerA: string;
  answerB: string;
  totalVotesA: number; // A 항목 비율 (예: 찍먹)
  totalVotesB: number; // B 항목 비율 (예: 부먹)
  colorA: string; // A 항목 색상 (찍먹 색상)
  colorB: string; // B 항목 색상 (부먹 색상)
}

export default function QuestionStatBar({
  answerA,
  answerB,
  totalVotesA,
  totalVotesB,
  colorA,
  colorB,
}: QuestionStatBarProps) {
  const votesSum = totalVotesA + totalVotesB;

  return (
    <div className='w-full space-y-4 px-16'>
      {/* answerA 투표율 */}

      <div>
        <span className='text-small-01 text-primaryVariant'>A. {answerA}</span>

        <div className='flex h-16 w-full items-center gap-4 rounded-full bg-transparent'>
          <div
            className={`h-full ${colorA} rounded-full`}
            style={{ width: `${(totalVotesA / votesSum) * 100}%` }}
          />
          <span className='text-small-01'>
            {Math.floor((totalVotesA / votesSum) * 100)}%
          </span>
        </div>
      </div>

      {/* answerA 투표율 */}
      <div>
        <span className='text-small-01 text-primaryVariant'>B. {answerB}</span>
        <div className='flex h-16 w-full items-center gap-4 rounded-full bg-transparent'>
          <div
            className={`h-full ${colorB} rounded-full`}
            style={{ width: `${(totalVotesB / votesSum) * 100}%` }}
          />
          <span className='text-small-01 text-gray-8'>
            {Math.floor((totalVotesB / votesSum) * 100)}%
          </span>
        </div>
      </div>
    </div>
  );
}
