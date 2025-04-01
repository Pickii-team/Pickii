'use server';

import { createClient } from '@/src/utils/supabase/server';

interface Props {
  question_id: number;
}

export async function ReadQuestionDetail({ question_id }: Props) {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from('question')
    .select(
      `
      id, 
      question_description, 
      answer_a, 
      answer_b, 
      answer_a_desc,
      answer_b_desc,
      question_stat(total_votes_a, total_votes_b), 
      question_comment(id, comment, created_at, user_id)
      `,
    )
    .eq('id', question_id)
    .single();

  if (error) {
    return {
      success: false,
      message: '질문 상세 정보를 불러오는 데 문제가 발생했습니다.',
      error,
    };
  }

  return {
    success: true,
    message: '질문 상세 정보를 불러오는 데 성공했습니다.',
    data,
  };
}
