import { cities } from './cities'

export default function CityList() {
  return (
    <>
      {cities.sort().map((city) => (
        <p
          className='font-normal text-xl'
          key={city + Math.floor(Math.random() * 1000000)}
        >
          {city.split('/')[1].replace(/_/g, ' ')}
        </p>
      ))}
    </>
  )
}
