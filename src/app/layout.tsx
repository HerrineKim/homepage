import '@/styles/globals.css'
import Link from 'next/link'
import { inter } from '@/app/fonts'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const sideBar = (
    <div className='w-full p-8 border-b md:w-56 md:border-r md:border-b-0'>
      <div className='mb-8 md:mb-12'>
        <Link href='/'>
          <h1 className='mb-2'>김혜린</h1>
          <h2 className='mb-2'>Hyerin April Kim</h2>
        </Link>
        <p className='mb-2 text-sm text-gray-600'>
          프론트엔드를 메인으로 하는 웹 개발자입니다.
        </p>
        <p className='mb-2 text-sm text-gray-600'>
          React, Vue, Next.js, Nest.js, Express.js, Dropwizard, NGINX, AWS,
          Docker, Git, Figma, JIRA
        </p>
      </div>

      {/* Information */}
      <nav className='flex flex-col space-y-4'>
        <a
          href='mailto:aprilhyerinkim@gmail.com'
          className='text-sm text-gray-800 hover:text-gray-600'
        >
          aprilhyerinkim@gmail.com
        </a>
        <Link
          href='https://github.com/HerrineKim'
          className='text-sm text-gray-800 hover:text-gray-600'
        >
          GitHub
        </Link>
        <Link
          href='/books'
          className='text-sm text-gray-800 hover:text-gray-600'
        >
          Books
        </Link>
        <Link
          href='/experiment'
          className='text-sm text-gray-800 hover:text-gray-600'
        >
          Experiment
        </Link>
      </nav>

      {/* Footer */}
      <div className='pt-8 mt-auto text-xs text-gray-500 md:pt-12'>
        <p>© 2025 Herrine Kim</p>
      </div>
    </div>
  )

  return (
    <html lang='en' className={inter.className}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className='bg-gray-50'>
        <div className='flex flex-col max-w-5xl min-h-screen mx-auto bg-white md:flex-row'>
          {sideBar}
          <main className='flex-1 max-w-2xl p-8'>{children}</main>
        </div>
      </body>
    </html>
  )
}
