import Button from '@/src/components/Button';
import AnswerSection from '@/src/containers/game/result/answer-section';
import SummarySection from '@/src/containers/game/result/summary-section';
import ResultInfoSection from '@/src/containers/game/result/result-info-section';
import { IconElipsis, IconDangerCircle, IconFolderCheck } from '@/public/svgs';

const GameResultPage = () => {
  return (
    <div className='h-full overflow-y-auto pb-40'>
      <header className='flex h-64 w-full shrink-0 flex-col items-center justify-center text-title-02 text-gray-10'>
        결과 보기
      </header>
      <IconElipsis className='mx-auto mb-20' />
      <AnswerSection />
      <SummarySection />
      <ResultInfoSection />
    </div>
  );
};

export default GameResultPage;
