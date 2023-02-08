import './globals.css'
import Link from 'next/link'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const navBar = (
    <nav>
      <Link href='/'>Home</Link>
      <Link href='/portfolio'>Portfolio</Link>
      <Link href='/myroom'>Myroom</Link>
      <Link href='/experiment'>Experiment</Link>
      <Link href='/wiki'>Wiki</Link>
    </nav>
  )

  const header = (
    <header>
      <h1>혜린의 아지트</h1>
      <p>환영합니다💛</p>
      <br />
    </header>
  )

  const footer = (
    <footer>
      <br />
      <p>© 2023 Herrine Kim</p>
    </footer>
  )

  return (
    <html lang='en'>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        {header}
        {navBar}
        {children}
        {footer}
      </body>
    </html>
  )
}
