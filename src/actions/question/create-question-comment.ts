import { createClient } from '@/src/utils/supabase/server';
import { ReadUserInfo } from '../user/read-user-info';

export default async function CreateQuestionComment(payload: {
  question_id: number;
  comment: string;
}) {
  const supabase = await createClient();
  const userRes = await ReadUserInfo();
  const { question_id, comment } = payload;

  if (!userRes.data) {
    return {
      success: false,
      message: '사용자 정보를 불러오는 중 오류가 발생했습니다.',
      error: null,
    };
  }

  const { data, error } = await supabase
    .from('question_comment')
    .insert({ user_id: userRes.data.id, question_id, comment });

  if (error) {
    console.error('댓글 생성 오류:', error.message);
    return {
      success: false,
      message: '댓글을 생성하는 중 오류가 발생했습니다.',
      error,
    };
  }

  return {
    success: true,
    message: '댓글이 성공적으로 생성되었습니다.',
    data,
  };
}
