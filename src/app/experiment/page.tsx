import { getBookDetail } from '../lib/books/getBookDetail'

export default function ExperimentPage() {
  const bookData = getBookDetail('리버보이')
  console.log('🚀 ~ file: page.tsx:5 ~ ExperimentPage ~ bookData', bookData)

  return (
    <>
      <h1>Experiment</h1>
      <div></div>
    </>
  )
}
