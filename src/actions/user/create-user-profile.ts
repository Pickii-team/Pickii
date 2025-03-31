'use server';

import { createClient } from '@/src/utils/supabase/server';
import { ReadUserInfo } from './read-user-info';

export async function CreateUserProfile(nickName: string) {
  const supabase = await createClient();
  const userRes = await ReadUserInfo();
  if (!userRes.success) {
    console.log('readUserInfo fail', userRes);
    return {
      success: false,
      message: 'readUserInfo failed.',
      data: null,
    };
  }
  const { data, error } = await supabase
    .from('user')
    .update({
      nick_name: nickName,
    })
    .eq('id', userRes.data!.id)
    .select('*');

  if (error) {
    console.log('fail createuserprofile', error);
    return {
      success: false,
      message: 'createUserProfile fail',
      data: null,
    };
  }

  return {
    success: true,
    message: 'createUserProfile success',
    data: data || null,
  };
}
