import { IconSmileEmoji } from '@/public/svgs';
import Button from '../components/Button';
import Header from '../components/Header';
import HotQuestion from '../containers/home/HotQuestion';

export default async function Home() {
  return (
    <>
      <Header />
      <section className='space-y-20 px-10 text-gray-10'>
        <div className='flex flex-col items-center gap-12 rounded-8 border border-primaryVariant bg-surface p-20 shadow-elevation1'>
          <div className='flex w-full items-center'>
            <IconSmileEmoji width={68} height={68} />
            <h2 className='basis-full text-center font-rockSalt text-primaryVariant'>
              What's Your Choice? <br />
              Balance Game
            </h2>
          </div>
          <p className='text-small-02'>
            지금까지 총 <span className='text-small-01'>12,340</span>명이
            참여했어요!
          </p>
          <Button
            variant='filled'
            buttonColor='secondary'
            className='h-auto py-36 text-primaryVariant'
          >
            밸런스 게임 <br />- START -
          </Button>
        </div>
        <Button variant='filled' buttonColor='secondary'>
          전체 질문 통계 보기
        </Button>
        <Button variant='filled' buttonColor='primary-variant'>
          로그인하기
        </Button>
        <HotQuestion />
      </section>
    </>
  );
}
