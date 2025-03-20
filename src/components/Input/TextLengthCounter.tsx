export default function TextLengthCounter({
  text,
  maxLength,
}: {
  text: string;
  maxLength: number;
}) {
  return (
    <div className='w-34 text-gray-6'>
      {text.length}/{maxLength}
    </div>
  );
}
