import { searchBook } from '@/app/lib/books/searchBook'
import Image from 'next/image'

export default async function BooksPage() {
  const booksData = await searchBook('정의란 무엇인가')

  return (
    <>
      <h1>books</h1>
      <ul>
        {booksData.items.map((item: any) => (
          <li key={item.isbn}>
            <h2>{item.title}</h2>
            <p>{item.author}</p>
            <p>{item.description}</p>
            <Image
              src={item.image}
              alt='도서 이미지'
              width={500}
              height={500}
            />
          </li>
        ))}
      </ul>
    </>
  )
}
