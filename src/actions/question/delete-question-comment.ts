import { createClient } from '@/src/utils/supabase/server';
import { ReadUserInfo } from '../user/read-user-info';

export default async function DeleteQuestionComment(comment_id: number) {
  const supabase = await createClient();
  const userRes = await ReadUserInfo();

  if (!userRes.data) {
    return {
      success: false,
      message: '사용자 정보를 불러오는 중 오류가 발생했습니다.',
      error: null,
    };
  }

  const { data, error } = await supabase
    .from('question_comment')
    .delete()
    .eq('id', comment_id)
    .eq('user_id', userRes.data.id);

  if (error) {
    console.error('댓글 삭제 오류:', error.message);
    return {
      success: false,
      message: '댓글을 삭제하는 중 오류가 발생했습니다.',
      error,
    };
  }

  return {
    success: true,
    message: '댓글이 성공적으로 삭제되었습니다.',
    data,
  };
}
