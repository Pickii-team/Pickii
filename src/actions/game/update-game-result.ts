'use server';

import { createClient } from '@/src/utils/supabase/server';
/**
 * 1. 마지막에 모든 답변 전송(question_answer)
 * - question 마다 question_answer 생성
 * 2. 통계 업데이트(question_stat)
 * - question 마다 question_stat 생성
 */
interface Props {}
export async function UpdateGameResult(payload: any) {
  const supabase = await createClient();
  const { sessionId, answers } = payload;
  /**
   * {
   *   session_id: 1,
   *   answers: [
   *     {
   *       question_id: 1,
   *       selected: '부먹'
   *     }
   *   ]
   * }
   */
  // 답변 생성
  const answerPromises = answers.map(
    (answer: { question_id: number; selected: string }) => {
      return supabase.from('question_answer').insert({
        session_id: sessionId,
        question_id: answer.question_id,
        selected: answer.selected,
      });
    },
  );

  // 통계 업데이트
  const statPromises = payload.answers.map(
    (answer: { question_id: number; selected: string }) => {
      return supabase
        .from('question_stat')
        .upsert(
          { question_id: answer.question_id },
          { onConflict: 'question_id' },
        );
    },
  );

  const [answerResults, statResults] = await Promise.all([
    Promise.all(answerPromises),
    Promise.all(statPromises),
  ]);

  const answerErrors = answerResults.filter((res) => res.error);
  const statErrors = statResults.filter((res) => res.error);

  if (answerErrors.length > 0 || statErrors.length > 0) {
    console.error('Error while updating game results:', {
      answerErrors,
      statErrors,
    });
    return {
      success: false,
      message: '일부 데이터를 저장하는 중 오류가 발생했습니다.',
      answerErrors,
      statErrors,
    };
  }

  return { success: true, message: '게임 결과가 성공적으로 저장되었습니다.' };
}
