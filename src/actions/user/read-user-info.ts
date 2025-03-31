'use server';

import { createClient } from '@/src/utils/supabase/server';

export async function ReadUserInfo() {
  const supabase = await createClient();

  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();
  console.log('#user => ', user, error);
  if (error || !user) {
    return { success: false, message: 'read user info error', data: null };
  }
  return { success: true, message: 'success', data: user };
}
