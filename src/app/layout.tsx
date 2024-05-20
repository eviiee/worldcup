import type { Metadata } from "next";
import "@/styles/global.scss";
import Header from "./_common/Header";

export const metadata: Metadata = {
  title: "이상형 월드컵 - #999FFF",
  description: "이상형 월드컵을 만들고, 플레이하고, 공유할 수 있습니다. 포트폴리오 용도로 만들어졌어요.",
  keywords: "이상형 월드컵",
  authors: [
    {name: "999FFF", url: ""},
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body id="body">
        <Header />
        <main>{children}</main>
        <div id="modal_backdrop"></div>
      </body>
    </html>
  );
}
