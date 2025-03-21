import Header from '@/src/components/Header';
import QuestionStatList from '@/src/components/QuestionStat/QuestionStatList';
import TagButton from '@/src/containers/totalstats/TagButton';
import { QUESTIONS } from '@/src/lib/mockData';
const TAGS = ['음식', '기타', '텍스트', '텍스트', '텍스트', '텍스트'];

export default function TotalStat() {
  return (
    <div>
      <Header />
      <div className='flex gap-12 overflow-y-auto pl-16 [&::-webkit-scrollbar]:hidden'>
        {TAGS.map((tag, idx) => (
          <TagButton key={idx} content={tag} />
        ))}
      </div>
      <div className='px-16 py-20'>
        <QuestionStatList questions={QUESTIONS} />
      </div>
    </div>
  );
}
