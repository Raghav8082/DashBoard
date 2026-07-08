// @ts-ignore: CSS import typings not found
import './ui/global.css';
import{ inter } from '@/app/ui/font'
export function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className}'antialiased'`}>{children}</body>
     
    </html>
  );
}

export default RootLayout;

