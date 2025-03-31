import NicknameSection from '@/src/containers/auth/onboarding/nickname-section';
import { Logo } from '@/public/svgs';

export default function OnBoarding() {
  return (
    <>
      <Logo height='48' className='mx-auto mb-80' />

      <NicknameSection />
    </>
  );
}
