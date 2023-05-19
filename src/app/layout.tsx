import './globals.css';
import Header from '@/components/header';

export const metadata = {
  title: 'Homepage',
  description: 'Homepage of the page',
  keywords: 'next js 13'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  )
}
