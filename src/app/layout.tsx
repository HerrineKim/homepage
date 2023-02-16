import '../styles/globals.css'
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
      <div className='text-center bg-slate-800 p-8 my-6 rounded-md'>
        <Link href='/'>
          <h1 className='text-2xl text-white font-bold mt-4'>혜린의 아지트</h1>
        </Link>
        <p className='text-slate-300'>환영합니다💛</p>
      </div>
    </header>
  )

  const footer = (
    <footer className='border-t border-slate-400 mt-12 py-12 text-center text-slate-400'>
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
        <div className='mx-auto max-w-2xl px-6'>
          {header}
          {navBar}
          {children}
          {footer}
        </div>
      </body>
    </html>
  )
}
