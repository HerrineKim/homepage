import { useState, useEffect } from 'react'

export default function MyCityBanner() {
  const seoulTimeURL = 'http://worldtimeapi.org/api/timezone/Asia/Seoul'

  const [seoulTime, setSeoulTime] = useState(0)

  useEffect(() => {
    fetch(seoulTimeURL)
      .then((response) => response.json())
      .then((data) => {
        setSeoulTime(
          new Date(data.datetime).getHours() * 3600 +
            new Date(data.datetime).getMinutes() * 60 +
            new Date(data.datetime).getSeconds(),
        )
      })
      .catch((error) => {
        throw new Error(error)
      })
    const timer = setInterval(() => {
      setSeoulTime((prev) => prev + 1)
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className='min-w-full bg-black/50 rounded-xl p-8 w-4/5 h-full flex flex-col'>
      <p className='basis-1/5 text-4xl mb-4 text-center text-white'>📍</p>
      <p className='basis-1/3 text-3xl text-center text-white'>Seoul</p>
      {seoulTime === 0 ? (
        <p className='text-lg text-center text-white'>Loading...</p>
      ) : (
        <p className='basis 1/3 text-6xl text-center text-white'>
          {new Date(seoulTime * 1000).toISOString().substr(11, 5)}
        </p>
      )}
    </div>
  )
}
