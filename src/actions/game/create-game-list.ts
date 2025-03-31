'use server';

import { createClient } from '@/src/utils/supabase/server';
import { ReadUserInfo } from '../user/read-user-info';

// 1. Read 유저 정보에서 userId 추출
// 2. Read 현재 유저의 세션 모두 불러옴 (Where userId 일치하는지) (sessionId 추출)
// 3. Read question_answer 모두 불러옴 (Where sessionId 일치하는지) (questionId 추출)
// 4. Read question 불러옴 (Where 아까 추출한 questionId 들 제외)
// 5. question 랜덤 10개 추출

export async function CreateGameList() {
  const supabase = await createClient();
  const userRes = await ReadUserInfo();
  if (!userRes.data) {
  } else {
    const userId = userRes.data.id;
    const { data: gameSessions, error: sessionError } = await supabase
      .from('game_session')
      .select('id')
      .eq('user_id', userId);
    if (!gameSessions || sessionError) {
      return {
        success: false,
        message: sessionError?.message || 'No game sessions found',
        data: null,
      };
    }
    const sessionIds = gameSessions.map((item) => item.id);

    const { data: questionAnswers, error: answerError } = await supabase
      .from('question_answer')
      .select('question_id')
      .in('session_id', sessionIds);

    if (!questionAnswers || sessionError) {
      return {
        success: false,
        message: answerError?.message || 'No question answers found',
        data: null,
      };
    }
    const questionIds = questionAnswers.map((item) => item.question_id);

    const { data: questions, error: questionError } = await supabase
      .from('question')
      .select('*')
      .not('id', 'in', questionIds);

    if (questionError || !questions) {
      return {
        success: false,
        message: questionError?.message || 'No available questions found',
        data: null,
      };
    }
    if (questions.length === 0) {
      return {
        success: true,
        message: 'All questions have been completed',
      };
    }

    const randomQuestions = questions
      .sort(() => Math.random() - 0.5)
      .slice(0, 10);

    // 모든 문제를 푼 경우
    // “축하합니다! 모든 문제를 정복하셨습니다! 🏆 새로운 문제들이 곧 추가될 예정이니, 다음 도전을 기대해 주세요!”라는 말을 사용자에게 출력해줌
    return {
      success: true,
      message: '',
      data: randomQuestions,
    };
  }
}
