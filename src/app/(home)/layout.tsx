import type { Metadata } from 'next';
// import localFont from 'next/font/local';
import '../../app/globals.css';
import Link from 'next/link';
import ScrollToTop from './components/scroll-to-top';

// const geistSans = localFont({
//   src: './fonts/GeistVF.woff',
//   variable: '--font-geist-sans',
//   weight: '100 900',
// });
// const geistMono = localFont({
//   src: './fonts/GeistMonoVF.woff',
//   variable: '--font-geist-mono',
//   weight: '100 900',
// });

export const metadata: Metadata = {
  title: 'Festibal Moa',
  description: ' ',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        {/* 전체 크기 조절 */}
        <div className="relative responsive-screen mx-auto ">
          {/* 헤더 영역 */}
          <header className="p-4 max-w-screen-2xl ">
            {/* 헤더 네비게이션 영역 */}
            <nav className="navbar container mx-auto flex justify-between  bg-base-100">
              <Link href="/">
                <h1 className="btn btn-ghost text-xl font-bold ">Festival Moa</h1>
              </Link>
            </nav>
          </header>

          {/* 컨텐츠 메인 내용 */}
          <main className="flex-grow container mx-auto p-4 responsive-contents">{children}</main>

          {/* 상단으로 이동 버튼 */}
          <ScrollToTop />

          {/* 푸터 영역 */}
          <footer className="p-4">
            <div className="container mx-auto p-2">
              <p>
                해당 자료 출처는 대한민국 공공데이터포털입니다
                <Link href="https://www.data.go.kr/data/15013104/standard.do#/tab_layer_open"> [바로가기]</Link>
              </p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
