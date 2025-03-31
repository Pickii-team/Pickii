'use server';

import { createClient } from '@/src/utils/supabase/server';
import { ReadUserInfo } from '../user/read-user-info';

export async function CreateGameSession() {
  const supabase = await createClient();
  const userRes = await ReadUserInfo();
  let userId;

  if (userRes.data) {
    userId = userRes.data.id;
  } else {
    // 익명 로그인
    const { data, error } = await supabase.auth.signInAnonymously();
    if (error) {
      return {
        success: false,
        message: 'signInAnonymously fail',
        data: null,
      };
    } else {
      userId = data.user?.id;
    }
  }

  const { data, error } = await supabase.from('game_session').insert({
    user_id: userId,
  });
  const createGameRes = await CreateGameSession();
  if (!createGameRes.success || !createGameRes.data) {
    console.error(createGameRes.message);
  }
  const gameList = createGameRes?.data;

  if (error) {
    return {
      success: false,
      message: 'createGameSession fail',
      data: null,
    };
  }

  return {
    success: true,
    message: 'createGameSession success',
    data: data || null,
  };
}
