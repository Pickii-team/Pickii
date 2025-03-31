import { createClient } from '@/src/utils/supabase/server';

export async function DeleteUserSession() {
  const supabase = await createClient();
  const { error } = await supabase.auth.signOut();
  if (error) {
    console.error('로그아웃 실패:', error.message);
  } else {
    console.log('로그아웃 성공');
  }
}
