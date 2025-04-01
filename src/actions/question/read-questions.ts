'use server';

import { createClient } from '@/src/utils/supabase/server';

const LIMIT = 10;

interface Props {
  page: number;
  tags: string[];
}

export async function ReadQuestions({ page, tags }: Props) {
  const supabase = await createClient();
  const start = Math.max((page - 1) * LIMIT, 0);
  const end = start + LIMIT - 1;

  const { data, error } = await supabase
    .from('question')
    .select(
      'id, question_description, answer_a, answer_b, question_stat(total_votes_a, total_votes_b)',
    )
    .in('type', tags)
    .range(start, end);

  if (error) {
    return {
      success: false,
      message: '질문을 불러오는 데 문제가 발생했습니다.',
      error,
    };
  }
  return {
    success: true,
    message: '질문을 불러오는 데 성공했습니다.',
    data,
  };
}
