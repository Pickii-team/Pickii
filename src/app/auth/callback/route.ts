import { createClient } from '@/src/utils/supabase/server';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams, origin } = new URL(request.url);
  const code = searchParams.get('code');

  const next = searchParams.get('next') ?? '/';

  if (code) {
    const supabase = await createClient();
    const { error } = await supabase.auth.exchangeCodeForSession(code);

    if (!error) {
      const forwardedHost = request.headers.get('x-forwarded-host');
      const isLocalEnv = process.env.NODE_ENV === 'development';

      if (isLocalEnv) {
        return NextResponse.redirect(`${origin}${next}/auth/onboarding`);
      } else if (forwardedHost) {
        return NextResponse.redirect(
          `https://${forwardedHost}${next}/auth/onboarding`,
        );
      } else {
        return NextResponse.redirect(`${origin}${next}/auth/onboarding`);
      }
    } else {
      return NextResponse.redirect(
        `${origin}/auth/exchange-session-error?${error}`,
      );
    }
  }
  return NextResponse.redirect(`${origin}/auth/auth-code-error?`);
}
