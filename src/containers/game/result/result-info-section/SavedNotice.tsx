import Button from '@/src/components/Button';
import { IconFolderCheck } from '@/public/svgs';

const SavedNotice = () => {
  return (
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
  );
};

export default SavedNotice;
