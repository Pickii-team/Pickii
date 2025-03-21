import Image from 'next/image';

interface CommentItemProps {
  username: string;
  commentText: string;
  avatarUrl: string;
}

const CommentItem = ({
  username,
  commentText,
  avatarUrl,
}: CommentItemProps) => {
  return (
    <li className='flex list-none flex-col gap-4 border-b border-gray-4 px-16 py-8'>
      <div className='flex items-center gap-8'>
        <div className='relative h-24 w-24'>
          <Image
            src={avatarUrl}
            alt={`${username}'s avatar`}
            fill
            className='overflow-hidden rounded-32'
            draggable={false}
          />
        </div>
        <span className='text-small-01'>{username}</span>
      </div>
      <p className='text-small-02'>{commentText}</p>
    </li>
  );
};

export default CommentItem;
