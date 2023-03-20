import Link from 'next/link'
import { PostMetadata } from '@/app/components/PostMetadata'

const PostPreview = (props: PostMetadata) => (
  <div className='border border-slate-300 p-4 rounded-md shadow-md bg-white'>
    <p className='text-sm text-slate-400'>{props.date}</p>
    <Link href={`\\wiki\\${props.slug}`}>
      <h2 className=' text-violet-600 hover:underline mb-4'>{props.title}</h2>
    </Link>
    {/* TODO: Warning: Only plain objects can be passed to Client Components from Server Components. Date objects are not supported. */}
    {/* https://stackoverflow.com/questions/74343558/pass-date-object-from-server-component-to-client-component-in-next-js-13 */}
    <p className='text-slate-700'>{props.tags}</p>
  </div>
)

export default PostPreview
