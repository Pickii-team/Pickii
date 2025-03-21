import Button from '@/src/components/Button';

const ResultActions = () => {
  return (
    <div className='flex w-full gap-20'>
      <Button variant='filled' buttonColor='primary-variant'>
        메인으로
      </Button>
      <Button variant='filled' buttonColor='secondary'>
        링크 공유하기
      </Button>
    </div>
  );
};

export default ResultActions;
