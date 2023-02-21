import { getBookDetail } from '../lib/books/getBookDetail'

export default function BooksPage() {
  const bookData = getBookDetail('리버보이')

  console.log(
    bookData.then((data) => {
      console.log(data)
    }),
  )

  return (
    <>
      <h1>Experiment</h1>
      <div></div>
    </>
  )
}
