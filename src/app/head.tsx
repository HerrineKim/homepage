export default function Head() {
  // HTML <meta> 태그(http://www.tcpschool.com/html-tags/meta)
  // TODO 후에 props를 받아서 동적인 title, description을 만들 수 있도록 할 수 있다.
  // TODO 이곳에서 SNS에 URL을 공유할 때 미리보기가 가능한 Open Graph 설정도 할 수 있다.
  return (
    <>
      <title>혜린의 아지트</title>
      <meta charSet='utf-8' />
      <meta content='width=device-width, initial-scale=1' name='viewport' />
      <meta name='description' content='개발자 혜린의 아지트' />
      <meta
        name='keywords'
        content='개발자, 프론트엔드, 프론트엔드 개발자, 혜린, 혜린의 아지트, Frontend, Frontend Developer, HerrineKim, aprilkim98'
      />
      <meta name='author' content='HerrineKim' />
      <link rel='icon' href='/favicon.ico' />
    </>
  )
}
