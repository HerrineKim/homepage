import { getBookDetail } from '@/app/lib/books/getBookDetail'
import Image from 'next/image'

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
            <Image src={item.image} alt='도서 이미지' />
          </li>
        ))}
      </ul>
    </>
  )
}
