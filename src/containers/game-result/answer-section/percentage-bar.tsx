type PercentageBarProps = {
  percentage: number[];
};

export default function PercentageBar({ percentage }: PercentageBarProps) {
  const [leftPercentage, rightPercentage] = percentage;
  return (
    <div className='flex w-full items-center justify-between gap-4'>
      <span>{leftPercentage}%</span>
      <div className='flex h-10 basis-full'>
        <div
          className={`h-full basis-${leftPercentage / 100} rounded-l-32 bg-secondary`}
        />
        <div
          className={`h-full basis-${rightPercentage / 100} rounded-r-32 bg-primaryVariant`}
        />
      </div>
      <span>{rightPercentage}%</span>
    </div>
  );
}
