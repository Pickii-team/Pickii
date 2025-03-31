'use server';

import { createClient } from '@/src/utils/supabase/server';

export async function UpdateGameResult() {
  const supabase = await createClient();

  /**
   * 1. 마지막에 모든 답변 전송(question_answer)
   * 2. 통계 업데이트(question_stat)
   */
}
