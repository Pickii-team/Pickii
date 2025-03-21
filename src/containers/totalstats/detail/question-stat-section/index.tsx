import QuestionStatBar from './QuestionStatBar';
import QuestionStatCarousel from './QuestionStatCarousel';

type Props = {};

const cards = [
  {
    id: 1,
    answer: '부먹',
    text: '지고 있어요ㅠㅠ',
    imageUrl: 'https://picsum.photos/600',
    description: '간장 부먹派',
    totalVotes: 120,
  },
  {
    id: 2,
    answer: '찍먹',
    text: '이기고 있어요!',
    imageUrl: 'https://picsum.photos/600',
    description: '소스 찍먹派',
    totalVotes: 180,
  },
];

export default function QuestionStatSection({}: Props) {
  return (
    <section className='flex w-full flex-col items-center gap-16'>
      <div className='w-full px-16'>
        <div className='flex w-full flex-col items-center justify-center rounded-32 border border-primaryVariant bg-surface px-16 py-8 text-title-03 text-primaryVariant'>
          <span>Q.</span>
          <h1>탕수육 먹을 땐?</h1>
        </div>
      </div>

      <QuestionStatCarousel cards={cards} />

      <QuestionStatBar
        answerA='부먹'
        answerB='찍먹'
        totalVotesA={72}
        totalVotesB={28}
        colorA='bg-primary'
        colorB='bg-secondary'
      />
    </section>
  );
}
