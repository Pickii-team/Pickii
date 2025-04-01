'use server';

import { createClient } from '@/src/utils/supabase/server';

interface Props {
  query: string;
  page: number;
  limit: number;
}

export async function SearchQuestion({ query, page, limit }: Props) {
  const supabase = await createClient();
  const start = Math.max((page - 1) * limit, 0);
  const end = start + limit - 1;

  const { data, error } = await supabase
    .from('question')
    .select('*')
    .textSearch('question_description', query)
    .range(start, end);
  if (error) {
    return {
      success: false,
      message: '검색 결과를 불러오는 중 오류가 발생했습니다.',
      error,
    };
  }
  return {
    success: true,
    message: '검색 결과를 성공적으로 불러왔습니다.',
    data,
  };
}
