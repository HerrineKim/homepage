import './globals.css'
import Link from 'next/link'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <nav>
          <Link href='/'>Home</Link>
          <Link href='/portfolio'>Portfolio</Link>
          <Link href='/myroom'>Myroom</Link>
          <Link href='/experiment'>Experiment</Link>
          <Link href='/wiki'>Wiki</Link>
        </nav>
        {children}
      </body>
    </html>
  )
}
