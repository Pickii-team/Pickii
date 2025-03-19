import localFont from 'next/font/local';
import '../styles/globals.css';

const pretendard = localFont({
  src: '../styles/font/PretendardVariable.woff2',
  display: 'swap',
  weight: '45 920',
  variable: '--font-pretendard',
});

const rockSalt = localFont({
  src: '../styles/font/RockSalt.woff2',
  display: 'swap',
  variable: '--font-rockSalt',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className={`${pretendard.variable} ${rockSalt.variable}`}>
      <body className='bg-background font-pretendard'>
        <main className='ax-w-600 mx-auto h-dvh bg-white shadow-lg'>
          {children}
        </main>
      </body>
    </html>
  );
}
