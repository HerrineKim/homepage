import fs from 'fs'

interface PostContentProps {
  // TODO 왜 params 안에 들어가 있지? URL이라서? 알아보기
  params: {
    slug: string
  }
}

const getPostContent = (slug: string) => {
  const folder = 'src\\app\\posts'
  const file = `${folder}\\${slug}.md`
  const content = fs.readFileSync(file, 'utf8')
  return content
}

export default function PostPage(props: PostContentProps) {
  // TODO 파일명이 한글이면 깨지는 문제 해결하기
  const slug = props.params.slug
  const content = getPostContent(slug)
  return (
    <>
      <h1>자바스크립트 글: {slug}</h1>
      <div>{content}</div>
    </>
  )
}