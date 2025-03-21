// src/container/question/detail/comments-section.tsx
import CommentItem from './CommentItem';

interface CommentsSectionProps {
  comments: {
    username: string;
    commentText: string;
    avatarUrl: string;
  }[];
}

const CommentsSection = ({ comments }: CommentsSectionProps) => {
  return (
    <section>
      <h2 className='border-b border-gray-4 pb-8 pl-16 text-small-01'>
        댓글({comments.length})
      </h2>
      {comments.map((comment, index) => (
        <CommentItem
          key={index}
          username={comment.username}
          commentText={comment.commentText}
          avatarUrl={comment.avatarUrl}
        />
      ))}
    </section>
  );
};

export default CommentsSection;
