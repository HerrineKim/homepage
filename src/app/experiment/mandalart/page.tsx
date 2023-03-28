'use client'

import { useState, useEffect } from 'react'

export default function MandalartPage() {
  const [isFirstOpened, setIsFirstOpened] = useState(true)
  const [isSecondOpened, setIsSecondOpened] = useState(false)
  const [isThirdOpened, setIsThirdOpened] = useState(false)
  const [isFourthOpened, setIsFourthOpened] = useState(false)
  const [isFifthOpened, setIsFifthOpened] = useState(false)
  const [isSixthOpened, setIsSixthOpened] = useState(false)
  const [isSeventhOpened, setIsSeventhOpened] = useState(false)
  const [isEighthOpened, setIsEighthOpened] = useState(false)
  const [isNinthOpened, setIsNinthOpened] = useState(false)

  return (
    <>
      <h1>나만의 만다라트 만들기</h1>
      <div className='grid grid-cols-3 grid-rows-3'>
        <div className='col-span-1 row-span-1'>
          <div
            className='w-32 h-32 bg-gray-200 rounded-xl'
            onClick={() => setIsFirstOpened(!isFirstOpened)}
          >
            {isFirstOpened && <p>1</p>}
          </div>
        </div>
      </div>
    </>
  )
}
