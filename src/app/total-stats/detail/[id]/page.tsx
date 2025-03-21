import { IconLeftArrow } from '@/public/svgs';
import QuestionStatSection from '@/src/containers/totalstats/detail/question-stat-section';
import CommentsSection from '@/src/containers/totalstats/detail/comments-section';
import FooterSection from '@/src/containers/totalstats/detail/footer-section';

const comments = [
  {
    username: '무도키즈',
    commentText: '탕수육은 원래 부어먹는 음식입니다.',
    avatarUrl: 'https://picsum.photos/600',
  },
  {
    username: '피자팬',
    commentText: '찍먹이 더 맛있어요!',
    avatarUrl: 'https://picsum.photos/600',
  },
];

export default function QuestionDetailPage() {
  return (
    <div className='h-full overflow-y-scroll'>
      <header className='margin sticky top-0 z-50 mb-12 flex h-64 items-center bg-white px-16 py-8'>
        <button>
          <IconLeftArrow />
        </button>
      </header>
      <div className='flex basis-full flex-col gap-20 pb-40'>
        <QuestionStatSection />
        <CommentsSection comments={comments} />
      </div>
      <FooterSection />
    </div>
  );
}
