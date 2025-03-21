interface Props {
  nowStep: number;
  totalStep: number;
}
export default function ProgressBar({ nowStep, totalStep }: Props) {
  return (
    <div className='flex flex-col items-center gap-12'>
      <div className='w-full'>
        <div
          className={`absolute h-10 rounded-full bg-primary`}
          style={{ width: `calc(${(nowStep / totalStep) * 100}%)` }}
        ></div>
        <div className='h-10 w-full rounded-full bg-gray-3'></div>
      </div>
      <p className='text-medium-01 text-primaryVariant'>
        {nowStep}/{totalStep}
      </p>
    </div>
  );
}
