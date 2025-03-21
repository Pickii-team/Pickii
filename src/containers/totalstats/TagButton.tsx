import { IconClose } from '@/public/svgs';

interface Props {
  content: string;
}
export default function TagButton({ content }: Props) {
  return (
    <>
      <button
        type='button'
        className='flex items-center gap-10 px-20 py-6 border rounded-full text-nowrap border-primaryVariant text-primaryVariant'
      >
        <p>{content}</p>
      </button>
      {/* <button
        type='button'
        className='flex items-center gap-10 py-6 border rounded-full border-primaryVariant bg-primaryVariant px-15 text-surface'
      >
        <p>{content}</p>
        <IconClose />
      </button> */}
    </>
  );
}
