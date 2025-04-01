'use server';

import { createClient } from '@/src/utils/supabase/server';

export async function ReadGameResult(payload: { session_id: number }) {
  const supabase = await createClient();
  const { session_id } = payload;

  // 기본 ver

  /*  response = [
    {
      question_id: 1, // question_answer
      question_description: 'string', // question
      answer_a: 'string', // question
      answer_b: 'string', // question
      selected: 'string', // question_answer
      total_votes_a: 1, // question_stat
      total_votes_b: 2, // question_stat
    },
  ]; */

  const { data, error } = await supabase
    .from('question_answer')
    .select(
      `question_id, selected, question(question_description, answer_a, answer_b, question_stat(total_votes_a, total_votes_b))`,
    )
    .eq('session_id', session_id);

  if (error) {
    console.error('Error fetching game result:', error);
    return {
      success: false,
      message: '데이터를 가져오는 중 오류가 발생했습니다.',
    };
  }

  return {
    success: true,
    message: '게임 결과를 성공적으로 가져왔습니다.',
    data,
  };

  // 비교 ver
  // 다른 유저의 id로 게임 결과를 가져와야함
}
