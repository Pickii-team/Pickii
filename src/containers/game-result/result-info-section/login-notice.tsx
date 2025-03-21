import Button from '@/src/components/Button';
import { IconDangerCircle } from '@/public/svgs';

const LoginNotice = () => {
  return (
    <div className='flex flex-col gap-16 rounded-8 border border-primaryVariant bg-white p-20 shadow-elevation1'>
      <div className='flex items-center gap-16'>
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
    </div>
  );
};

export default LoginNotice;
