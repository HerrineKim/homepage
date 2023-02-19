export async function getBookDetail(bookName: string) {
  const bookDetail = await fetch(
    `${process.env.Naver_Book_Search_API_URL}` + bookName,
    {
      cache: 'no-store',
      method: 'GET',
      headers: {
        'X-Naver-Client-Id': process.env.Naver_Book_Client_Id,
        'X-Naver-Client-Secret': process.env.Naver_Book_Client_Secret,
      },
    },
  )
  console.log('bookDetail', bookDetail.json())
  return await bookDetail.json()
}
