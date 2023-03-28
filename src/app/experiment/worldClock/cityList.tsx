export default function CityList() {
  const cities = [
    'Asia/Singapore',
    'Asia/Tokyo',
    'Australia/Melbourne',
    'Australia/Sydney',
    'Europe/London',
    'Europe/Paris',
    'Europe/Berlin',
    'America/New_York',
    'America/Los_Angeles',
  ]

  return (
    <>
      {cities.sort().map((city) => (
        <p
          className='font-normal text-xl'
          key={city + Math.floor(Math.random() * 1000000)}
        >
          {city?.split('/')[1].replace(/_/g, ' ')}
        </p>
      ))}
    </>
  )
}
