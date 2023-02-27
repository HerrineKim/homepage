export async function searchBook(bookName: string) {
  const searchBookHeaders: HeadersInit = {
    'X-Naver-Client-Id': process.env.Naver_Client_Id,
    'X-Naver-Client-Secret': process.env.Naver_Client_Secret,
  }
  const searchBookQuery = new URLSearchParams({
    query: bookName,
  })
  const searchBookURL = `${process.env.Naver_Book_Search_API_URL}?${searchBookQuery}`
  const books = await fetch(searchBookURL, {
    cache: 'no-store',
    method: 'GET',
    headers: searchBookHeaders,
  })

  return await books.json()
}
