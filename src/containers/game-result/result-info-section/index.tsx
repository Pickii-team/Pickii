import LoginNotice from './login-notice';
import SavedNotice from './saved-notice';
import ResultActions from './result-actions';

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
