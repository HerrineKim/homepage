import fs from 'fs'
import iconv from 'iconv-lite'

interface PostContentProps {
  // Dynamic route parameters object라서 params에 담겨져 들어오도록 Next.js에서 정해놓은 거였네요.
  // https://beta.nextjs.org/docs/api-reference/file-conventions/page#props
  params: {
    slug: string
  }
}

const getPostContent = (slug: string) => {
  // 현재 slug 한글은 %EC%95%84%EB%A7%8 이런 식으로 들어오는데, slug가 URI로!! 전달되면서 UNICODE로 인코딩되었기 때문입니다.
  // decodedURIComponent()를 사용해서 다시 원래 문자열로 복원합니다. 반대로, encodeURIC()를 사용해서 URI로 전달되었을 때 오류가 발생하지 않도록 인코딩할 수 있습니다.
  const decodedSlug = decodeURIComponent(slug)
  // console.log('decodedSlug', decodedSlug)
  const folder = 'src\\app\\posts'
  const file = `${folder}\\${decodedSlug}.md`
  const content = fs.readFileSync(file, 'utf8')
  return content
}

export default function PostPage(props: PostContentProps) {
  const slug = props.params.slug
  const content = getPostContent(slug)
  return (
    <>
      <h1>자바스크립트 글: {slug}</h1>
      <div>{content}</div>
    </>
  )
}
