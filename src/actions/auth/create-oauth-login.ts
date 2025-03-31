'use server';

import { createClient } from '@/src/utils/supabase/server';
import { Provider } from '@supabase/supabase-js';
import { redirect } from 'next/navigation';

export async function CreateOauthLogin(provider: Provider) {
  const supabase = await createClient();
  const auth_callback_url = `${process.env.SITE_URL}/auth/callback`;
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider,
    options: {
      queryParams: {
        access_type: 'offline',
        prompt: 'consent',
      },
      redirectTo: auth_callback_url,
    },
  });

  if (error) {
    redirect('/auth/callback');
  }

  redirect(data.url);
}
