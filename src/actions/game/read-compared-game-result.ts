'use server';

import { createClient } from '@/src/utils/supabase/server';
import { ReadGameResult } from './read-game-result';
export async function ReadComparedGameResult(payload: {
  session_id: number;
  opponent_session_id: number;
}) {
  const supabase = await createClient();
  const { session_id, opponent_session_id } = payload;

  const userResult = await ReadGameResult({ session_id: session_id });
  const opponentResult = await ReadGameResult({
    session_id: opponent_session_id,
  });

  return {
    success: true,
    message: '게임 결과를 성공적으로 가져왔습니다.',
    data: {
      userResult,
      opponentResult,
    },
  };
}
