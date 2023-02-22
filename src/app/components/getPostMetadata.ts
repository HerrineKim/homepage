import fs from 'fs'
// 파일 관련 입출력 등 여러 처리를 해주는 node.js 내장 모듈입니다.
import matter from 'gray-matter'
import { PostMetadata } from '@/app/components/PostMetadata'

const getPostMetadata = (): PostMetadata[] => {
  const folder = 'src\\app\\posts'
  // TODO 비동기 방식으로 변경
  const files = fs.readdirSync(folder)
  const markdownPosts = files.filter((file) => file.endsWith('.md'))
  // slugs: 파일명에서 확장자를 제외한 배열. 왜 slug? 옛날에 신문에서 중요한 단어로만 제목 만든 것을 지칭했습니다.

  const posts = markdownPosts.map((file) => {
    const fileContents = fs.readFileSync(`${folder}\\${file}`, 'utf8')
    const matterResult = matter(fileContents)
    return {
      title: matterResult.data.title,
      slug: file.replace('.md', ''),
      date: matterResult.data.date,
      tags: matterResult.data.tags,
    }
  })

  return posts
}

export default getPostMetadata
