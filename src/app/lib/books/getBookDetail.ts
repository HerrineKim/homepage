export async function getBookDetail(bookName: string) {
  const getBookDetailHeaders: HeadersInit = {
    'X-Naver-Client-Id': process.env.Naver_Book_Client_Id,
    'X-Naver-Client-Secret': process.env.Naver_Book_Client_Secret,
  }
  const bookDetail = await fetch(
    `${process.env.Naver_Book_Search_API_URL}` + '?query=' + bookName,
    {
      cache: 'no-store',
      method: 'GET',
      headers: getBookDetailHeaders,
    },
  )

  return await bookDetail.json()
}
