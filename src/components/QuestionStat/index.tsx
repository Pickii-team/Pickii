import Image from 'next/image';
import ImageCover from '../ImageCover';

export default function QuestionStat({
  questionText,
  winningImageSrc,
  imgArt,
  totalVotesA,
  totalVotesB,
}: any) {
  const winningAnswer =
    totalVotesA - totalVotesB > 0 ? totalVotesA : totalVotesB;
  const losingAnswer =
    totalVotesA - totalVotesB > 0 ? totalVotesB : totalVotesA;
  return (
    <div className='w-1/2 space-y-12'>
      <div className='aspect-[1/1.2]'>
        <ImageCover
          imageSrc='https://images.unsplash.com/photo-1567306226416-28f0efdc88ce'
          imageTitle={questionText}
        />
      </div>
      <div className='flex justify-between'>
        <div className='w-full space-y-8'>
          <div
            className='h-12 rounded-12 bg-primary'
            style={{ width: `calc(${winningAnswer}%)` }}
          ></div>
          <div
            className='h-12 rounded-12 bg-secondary'
            style={{ width: `calc(${losingAnswer}%)` }}
          ></div>
        </div>
        <p className='text-large-01'>{winningAnswer}%</p>
      </div>
    </div>
  );
}
