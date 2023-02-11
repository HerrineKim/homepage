import fs from 'fs'
// 파일 관련 입출력 등 여러 처리를 해주는 node.js 내장 모듈입니다.
import Link from 'next/link'

const getPostMetadata = () => {
  // 왜 Next.js에서는 escape character를 두 번 써야 하나?
  const folder = 'src\\app\\posts'
  // TODO 비동기 방식으로 변경
  const files = fs.readdirSync(folder)
  const markdownPosts = files.filter((file) => file.endsWith('.md'))
  // slugs: 파일명에서 확장자를 제외한 배열. 왜 slug? 옛날에 신문에서 중요한 단어로만 제목 만든 것을 지칭했습니다.
  const slugs = markdownPosts.map((file) => file.replace('.md', ''))
  return slugs
}

export default function WikiPage() {
  const postMetadata = getPostMetadata()
  return (
    <>
      <h1>Wiki</h1>
      <ul>
        {postMetadata.map((slug) => (
          <li key={slug}>
            <Link href={`/wiki/${slug}`}>{slug}</Link>
          </li>
        ))}
      </ul>
    </>
  )
}
