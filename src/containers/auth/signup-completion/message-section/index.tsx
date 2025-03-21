import { IconSmileEmoji } from '@/public/svgs';

type MessageSectionProps = {
  username: string;
};

export default function MessageSection({ username }: MessageSectionProps) {
  return (
    <section className='-mt-80 flex basis-full flex-col items-center justify-center gap-24'>
      <IconSmileEmoji width={200} height={200} />
      <p className='text-head-01 text-primaryVariant'>가입 완료</p>
      <p className='text-large-02'>
        환영합니다,
        <br />
        <span className='text-title-03'>{username}</span>님!
      </p>
    </section>
  );
}
