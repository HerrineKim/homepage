export async function getBookDetail(bookId: string) {
  const bookDetail = await fetch(`http://localhost:3000/books/${bookId}`)
  return await bookDetail.json()
}
