import Link from 'next/link'
import getPostMetadata from '../components/getPostMetadata'

export default function WikiPage() {
  const postMetadata = getPostMetadata()
  const postPreviews = postMetadata.map((post) => (
    <>
      <Link href={`/wiki/${post.slug}`}>
        <h2>{post.title}</h2>
      </Link>
      <p>{post.date}</p>
      <p>{post.tags}</p>
    </>
  ))

  return <div>{postPreviews}</div>
}
