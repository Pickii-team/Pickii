import LoginNotice from './LoginNotice';
import SavedNotice from './SavedNotice';
import ResultActions from './ResultActions';

const ResultInfoSection = () => {
  return (
    <section className='flex w-full flex-col gap-16 px-16'>
      {/* 로그인 X */}
      <LoginNotice />
      {/* 로그인 O */}
      <SavedNotice />
      <ResultActions />
    </section>
  );
};

export default ResultInfoSection;
