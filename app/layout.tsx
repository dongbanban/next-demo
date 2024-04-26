/*
 * @FilePath: /Users/i104/nextjs-dashboard/app/layout.tsx
 * @author: dongyang(yang.dong@derbysoft.net)
 */
import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
