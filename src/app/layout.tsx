import localFont from 'next/font/local';
import './globals.css';

const pretendard = localFont({
  src: '../styles/font/PretendardVariable.woff2',
  display: 'swap',
  weight: '45 920',
  variable: '--font-pretendard',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className={`${pretendard.variable}`}>
      <body className='bg-background font-pretendard'>
        <main>{children}</main>
      </body>
    </html>
  );
}
