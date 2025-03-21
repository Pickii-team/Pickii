import { IconVs } from '@/public/svgs';
import ImageCover from '@/src/components/ImageCover';
import { twMerge } from 'tailwind-merge';

interface Props {
  questionText: string;
  answerA: string;
  answerB: string;
  answerADesc: string;
  answerBDesc: string;
  answer: {
    id: number;
    sessionId: number;
    questionId: number;
    selected: string;
  };
  onAnswer: (selected: string) => void;
}

const baseStyle = 'w-full rounded-12 shadow-elevation1';
const inActiveStyle = twMerge(
  baseStyle,
  'py-50 text-onBackground space-y-16 border border-primaryVariant bg-surface',
);
const activeStyle = twMerge(
  inActiveStyle,
  'bg-secondary outline-4 outline outline-primaryVariant text-primaryVariant',
);

const imageInActiveStyle = twMerge(baseStyle);
const imageActiveStyle = twMerge(
  imageInActiveStyle,
  ' outline-4 outline outline-primaryVariant',
);

export default function Question({
  questionText,
  answerA,
  answerB,
  answerADesc,
  answerBDesc,
  answer,
  onAnswer,
}: Props) {
  console.log(answer);
  return (
    <div>
      <div className='py-4 text-center border rounded-full mb-30 border-primaryVariant bg-surface text-small-01 text-primaryVariant'>
        <p>
          Q.
          <br />
          {questionText}
        </p>
      </div>

      <div className='flex flex-col items-center gap-16'>
        <button
          type='button'
          className={answer.selected === answerA ? activeStyle : inActiveStyle}
          onClick={() => onAnswer(answerA)}
        >
          <p className='text-title-03'>{answerA}</p>
          <p className='text-small-01'>{answerADesc}</p>
        </button>
        <IconVs />
        <button
          type='button'
          className={answer.selected === answerB ? activeStyle : inActiveStyle}
          onClick={() => onAnswer(answerB)}
        >
          <p className='text-title-03'>{answerB}</p>
          <p className='text-small-01'>{answerBDesc}</p>
        </button>
      </div>
      {/* image O */}
      {/* <div className='flex flex-col items-center gap-16'>
        <button
          type='button'
          className={
            answer.selected === answerA ? imageActiveStyle : imageInActiveStyle
          }
          onClick={() => onAnswer(answerA)}
        >
          <ImageCover imageTitle={answerA} imageDesc={answerADesc} />
        </button>

        <IconVs />
        <button
          type='button'
          className={
            answer.selected === answerB ? imageActiveStyle : imageInActiveStyle
          }
          onClick={() => onAnswer(answerB)}
        >
          <ImageCover imageTitle={answerB} imageDesc={answerBDesc} />
        </button>
      </div> */}
    </div>
  );
}
