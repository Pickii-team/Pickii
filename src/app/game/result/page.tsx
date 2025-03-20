import Button from '@/src/components/Button';
import { IconElipsis, IconDangerCircle, IconFolderCheck } from '@/public/svgs';

const GameResultPage = () => {
  return (
    <div className='flex h-full flex-col overflow-y-auto pb-40'>
      <header className='flex h-64 w-full shrink-0 items-center justify-center text-title-02 text-gray-10'>
        결과 보기
      </header>
      <div className='flex basis-full flex-col justify-between gap-80'>
        <div className='flex basis-full flex-col items-center px-16'>
          <IconElipsis className='mb-20' />
          {/* Answers - 기본ver*/}
          <div className='flex w-full flex-col gap-4'>
            <p className='text-medium-01 text-gray-10'>Q1. 복숭아</p>
            <div className='flex h-48 w-full rounded-8 border border-primaryVariant shadow-elevation1'>
              <div className='flex basis-full items-center justify-center rounded-l-8 bg-primaryVariant text-secondary'>
                물복
              </div>
              <div className='flex basis-full items-center justify-center rounded-r-8 bg-white text-gray-6'>
                딱복
              </div>
            </div>
            {/* PercentageBar  */}
            <div className='flex w-full items-center justify-between gap-4'>
              <span>60%</span>
              <div className='flex h-10 basis-full'>
                <div className={`h-full basis-3/5 rounded-l-32 bg-secondary`} />
                <div
                  className={`h-full basis-2/5 rounded-r-32 bg-primaryVariant`}
                />
              </div>
              <span>40%</span>
            </div>
          </div>
          {/* Answers - 비교ver*/}
          <div className='flex w-full flex-col gap-4'>
            <p className='text-medium-01 text-gray-10'>Q1. 복숭아</p>
            <div className='flex w-full items-end gap-8'>
              <p className='flex shrink-0 flex-col items-center'>
                {/* <span className='text-title-02'>😭</span>
                <span className='text-caption-01 text-primaryVariant'>
                  달라요...
                </span> */}
                <span className='text-title-02'>🤩</span>
                <span className='text-caption-01 text-primaryVariant'>
                  일치해요!
                </span>
              </p>
              <div className='flex basis-full flex-col gap-4'>
                <div className='flex w-full flex-col gap-4'>
                  <div className='flex w-full'>
                    {['물복', '딱복'].map((answer, idx) => (
                      <div key={idx} className='flex flex-1 justify-center'>
                        <span
                          className={`h-20 rounded-32 border border-primaryVariant bg-white px-8 text-caption-01 text-primaryVariant ${answer === '물복' || 'hidden'}`}
                        >
                          친구
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className='flex h-36 w-full rounded-8 border border-primaryVariant shadow-elevation1'>
                  <div className='flex basis-full items-center justify-center rounded-l-8 bg-primaryVariant text-secondary'>
                    물복
                  </div>
                  <div className='flex basis-full items-center justify-center rounded-r-8 bg-white text-gray-6'>
                    딱복
                  </div>
                </div>
              </div>
            </div>
            {/* PercentageBar  */}
            <div className='flex w-full items-center justify-between gap-4'>
              <span>60%</span>
              <div className='flex h-10 basis-full'>
                <div className={`h-full basis-3/5 rounded-l-32 bg-secondary`} />
                <div
                  className={`h-full basis-2/5 rounded-r-32 bg-primaryVariant`}
                />
              </div>
              <span>40%</span>
            </div>
          </div>
        </div>
        {/* 비교ver*/}
        <p className='text-center text-medium-01'>
          결과를 정리해볼게요
          <br /> .<br /> .<br /> .<br /> 친구와{' '}
          <span className='text-primaryVariant'>70%</span> 일치해요!
          <br /> 서로 취향이 비슷하네요👍🏻
          <span></span>
        </p>
        <div className='flex w-full flex-col gap-16 px-16'>
          {/* 로그인X */}
          {/* <div className='flex flex-col gap-16 rounded-8 border border-primaryVariant bg-white p-20 shadow-elevation1'>
            <div className='flex gap-16 items-center'>
              <IconDangerCircle />
              <p className='text-medium-02 text-primaryVariant'>
                잠깐!
                <br />
                로그인하면 기록을 저장할 수 있어요.
              </p>
            </div>
            <Button variant='filled' buttonColor='secondary'>
              로그인하러 가기
            </Button>
          </div> */}
          {/* 로그인O */}
          <div className='flex flex-col gap-16 rounded-8 border border-primaryVariant bg-white p-20 shadow-elevation1'>
            <div className='flex items-center gap-16'>
              <IconFolderCheck />
              <p className='text-medium-02 text-primaryVariant'>
                결과가 저장되었어요.
              </p>
            </div>
            <Button variant='outline'>게임 기록 보러 가기</Button>
            <Button variant='filled' buttonColor='secondary'>
              공유해서 친구랑 비교하기
            </Button>
          </div>
          <div className='flex w-full gap-20'>
            <Button variant='filled' buttonColor='primary-variant'>
              메인으로
            </Button>
            <Button variant='filled' buttonColor='secondary'>
              링크 공유하기
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameResultPage;
