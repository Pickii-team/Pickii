import Input from '@/src/components/Input';

const NicknameSection = () => {
  return (
    <section className='flex basis-full flex-col gap-80'>
      <div className='flex flex-col gap-32'>
        <p className='text-left text-title-01'>
          피키에 오신 것을 환영해요!
          <br />
          닉네임을 설정해 주세요.
        </p>
        <Input
          inputText='피키피키'
          setInputText={() => {}}
          variant='default'
          hasClearButton
        />
      </div>
    </section>
  );
};

export default NicknameSection;
