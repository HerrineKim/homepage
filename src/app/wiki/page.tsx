import getPostMetadata from '../components/getPostMetadata'
import PostPreview from '../components/PostPreview'

export default function WikiPage() {
  const postMetadata = getPostMetadata()
  console.log('🚀 ~ file: page.tsx:6 ~ WikiPage ~ postMetadata', postMetadata)

  const postPreviews = postMetadata.map((post) => (
    <PostPreview key={post.slug} {...post} />
  ))

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>{postPreviews}</div>
  )
}
