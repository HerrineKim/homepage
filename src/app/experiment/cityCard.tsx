import { useState, useEffect } from 'react'

export default function CityCard({
  cityName,
  cityLabel,
}: {
  cityName: string
  cityLabel: string
}) {
  const baseURL = 'http://worldtimeapi.org/api/timezone/'

  const [cityTime, setCityTime] = useState(0)
  const [isAhead, setIsAhead] = useState(false)
  const [isBehind, setIsBehind] = useState(false)

  const [offset, setOffset] = useState(0)
  const [cityTimeAbb, setCityTimeAbb] = useState('')

  const seoulPromise = fetch(`${baseURL}/Asia/Seoul`)
  const cityPromise = fetch(baseURL + cityName)
  useEffect(() => {
    Promise.all([seoulPromise, cityPromise])
      .then((responses) => responses.map((el) => el.json()))
      .then((data) => Promise.all(data))
      .then((data) => {
        const thisSeoulTime = new Date(data[0].datetime.split('.')[0])
        const thisCityTime = new Date(data[1].datetime.split('.')[0])

        let tempTimeOffset = thisSeoulTime.getTime() - thisCityTime.getTime()
        if (tempTimeOffset < 0) {
          setIsAhead(true)
          tempTimeOffset = tempTimeOffset * -1
        } else {
          setIsBehind(true)
        }
        const tempTimeOffsetHour = Math.floor(tempTimeOffset / 3600000)
        setOffset(tempTimeOffsetHour)

        setCityTime(
          thisCityTime.getHours() * 3600 +
            thisCityTime.getMinutes() * 60 +
            thisCityTime.getSeconds(),
        )
        setCityTimeAbb(data[1].abbreviation.replace('+08', 'SNST'))
      })
      .catch((error) => {
        throw new Error(error)
      })
  }, [cityName])

  useEffect(() => {
    const cityTimer = setInterval(() => {
      setCityTime((prev) => prev + 1)
    }, 1000)
    return () => clearInterval(cityTimer)
  }, [])

  return (
    <>
      <div className='bg-white/50 rounded-xl p-6 mx-8 h-full w-10/12 flex flex-col content-start'>
        <p className='basis-1/3 text-5xl text-center text-white'>
          {cityName.split('/')[1].replace(/_/g, ' ')}
        </p>
        <p className='text-lg text-center text-white'>
          {cityLabel.length > 0 ? cityLabel : null}
        </p>
        {new Date(cityTime * 1000).toISOString().substr(11, 5) === '00:00' ? (
          <p className='text-lg text-center text-white'>Loading...</p>
        ) : (
          <p className='basis-1/3 text-6xl text-center text-white'>
            {new Date(cityTime * 1000).toISOString().substr(11, 5)}
          </p>
        )}
        <p className='text-2xl text-center text-white'>{cityTimeAbb}</p>
        <p className='text-lg text-center text-white'>
          {offset}
          {isAhead && ' hours ahead Seoul'}
          {isBehind && ' hours behind Seoul'}
        </p>
      </div>
    </>
  )
}
