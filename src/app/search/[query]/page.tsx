import QuestionStatList from '@/src/components/QuestionStat/QuestionStatList';
import { QUESTIONS } from '@/src/lib/mockData';

export default function SearchResult({
  params,
}: {
  params: { query: string };
}) {
  return (
    <div className='mt-20'>
      <QuestionStatList questions={QUESTIONS} />
    </div>
  );
}
