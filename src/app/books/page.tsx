import { getBookDetail } from '@/app/lib/books/getBookDetail'

export default async function BooksPage() {
  const bookData = await getBookDetail('리버보이')
  // console.log('🚀 ~ file: page.tsx:5 ~ BooksPage ~ bookData:', bookData)
  console.log(bookData.items)

  return (
    <>
      <h1>books</h1>
      <ul>
        {bookData.items.map((item: any) => (
          <li key={item.isbn}>
            <h2>{item.title}</h2>
            <p>{item.author}</p>
            <p>{item.description}</p>
            <img src={item.image} />
          </li>
        ))}
      </ul>
    </>
  )
}
