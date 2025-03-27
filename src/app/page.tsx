export default function HomePage() {
  return (
    <div>
      <h1 className='text-2xl font-bold mb-8'>Welcome to My Space</h1>

      <section className='mb-12'>
        <h2 className='text-lg font-semibold mb-4'>About Me</h2>
        <p className='text-gray-700 leading-relaxed'>
          I&apos;m a frontend developer passionate about creating beautiful and
          functional web experiences. I love exploring new technologies and
          sharing knowledge with others.
        </p>
      </section>

      <section className='mb-12'>
        <h2 className='text-lg font-semibold mb-4'>Recent Projects</h2>
        <div className='space-y-6'>
          <div className='border-b pb-4'>
            <h3 className='font-medium mb-2'>Personal Website</h3>
            <p className='text-gray-600 text-sm'>
              A Next.js-powered portfolio and blog
            </p>
          </div>
          {/* Add more projects as needed */}
        </div>
      </section>
    </div>
  )
}
