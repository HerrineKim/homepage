import getPostMetadata from '@/app/components/getPostMetadata'
import PostPreview from '@/app/components/PostPreview'

export default function WikiPage() {
  const postMetadata = getPostMetadata()

  const postPreviews = postMetadata.map((post) => (
    <PostPreview key={post.slug} {...post} />
  ))

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>{postPreviews}</div>
  )
}
