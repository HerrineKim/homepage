'use client'

import Image from 'next/image'
import shibaPic from '@/images/shiba.jpg'
// https://beta.nextjs.org/docs/optimizing/images

import { useState, useEffect } from 'react'
import { cities } from './cities'
import { RiDeleteBinLine } from 'react-icons/ri'

import MyCityBanner from './myCityBanner'
import CityList from './cityList'
import CityCard from './cityCard'

export default function ExperimentPage() {
  const [cityInput, setCityInput] = useState('')
  const [labelInput, setLabelInput] = useState('')
  const [cityResults, setCityResults] = useState<string[]>([])
  const [activeClocks, setActiveClocks] = useState<{
    [key: string]: string
  } | null>({})

  // 만약 activeClocks가 4개가 되면 모든 input 비활성화
  const [isDisabled, setIsDisabled] = useState(false)

  const maxClocksNum = 4

  useEffect(() => {
    const isDisabled = Object.keys(activeClocks || {}).length >= maxClocksNum
    setIsDisabled(isDisabled)
  }, [activeClocks])

  const handleCityInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCityInput(e.target.value)
  }

  const handleLabelInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLabelInput(e.target.value)
  }

  const onSearchCity = () => {
    if (cityInput.length > 0) {
      const filteredCities = cities.filter((city) =>
        city
          .replace(/_/g, '')
          .toLowerCase()
          .includes(cityInput.replace(/_/g, '').toLowerCase()),
      )
      setCityResults(filteredCities)
    }
  }

  const onClickCity = (
    e: React.MouseEvent<HTMLParagraphElement, MouseEvent>,
  ) => {
    e.preventDefault()
    setCityInput(e.currentTarget.textContent || '')
    setCityResults([])
  }

  const clearInputs = () => {
    setCityInput('')
    setLabelInput('')
  }

  const onSubmit = () => {
    if (cityInput.length > 0) {
      const filteredCities = cities.filter((city) =>
        city
          .replace(/_/g, ' ')
          .toLowerCase()
          .includes(cityInput.replace(/_/g, ' ').toLowerCase()),
      )
      if (filteredCities.length > 0) {
        if (activeClocks) {
          if (!Object.keys(activeClocks).includes(filteredCities[0])) {
            setActiveClocks({
              ...activeClocks,
              [filteredCities[0]]: labelInput,
            })
          } else {
            alert('This city is already added')
          }
        }
      }
    } else {
      alert('Please enter a city name')
    }
    clearInputs()
  }

  return (
    <div
      id='root'
      className='h-screen w-screen overflow-y-scroll bg-cover text-white flex flex-col py-6 font-mono'
      style={{
        backgroundImage:
          'url(https://images.unsplash.com/photo-1513297887119-d46091b24bfa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80)',
      }}
    >
      <div id='title-root' className='basis-1/12 mb-8 flex justify-center'>
        <p className='underline decoration-double text-4xl uppercase'>
          Merry World Time!
        </p>
      </div>
      <div
        id='top_root'
        className='basis-5/12 flex flex-wrap flex-row justify-center'
      >
        <div id='current_time' className='basis-1/5'>
          <MyCityBanner />
        </div>
        <div
          id='input_group'
          className='basis-1/5 min-w-fit ml-8 flex flex-col'
        >
          <p className='font-bold text-xl basis-1/6'>Add a city(up to 4)</p>
          <div id='city_input_div' className='relative basis-1/5'>
            <input
              className='shadow appearance-none border rounded pl-3 w-3/5 h-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              id='city_select'
              type='text'
              placeholder='Enter a city name'
              onChange={handleCityInputChange}
              value={cityInput}
              disabled={isDisabled}
              // 엔터키 치면 검색 함수 실행
            />
            <button
              className='mt-2 ml-4 px-4 py-4 text-sm text-white font-semibold rounded-full border border-white-200 hover:bg-gray-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2'
              onClick={onSearchCity}
            >
              search
            </button>
            {cityResults.length > 0 && (
              <div
                id='city_dropdown'
                className='absolute bg-white rounded-md shadow-md w-3/5'
              >
                {cityResults.map((city) => (
                  <p
                    className='font-normal py-1 w-4/5 text-xl text-gray-700 hover:italic hover:cursor-pointer hover:bg-gray-200'
                    key={city + Math.floor(Math.random() * 1000000)}
                    onClick={onClickCity}
                  >
                    {city.split('/')[1].replace(/_/g, ' ')}
                  </p>
                ))}
              </div>
            )}
          </div>
          <p className='font-bold text-xl basis-1/6 mt-6'>
            Add a label(If you want to)
          </p>
          <div id='label_input_div' className='basis-1/5'>
            <input
              className='shadow appearance-none border rounded pl-3 w-4/5 h-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              id='label_input'
              type='text'
              placeholder='Up to 20 characters'
              maxLength={20}
              value={labelInput}
              onChange={handleLabelInputChange}
              disabled={isDisabled}
            />
          </div>
          <div
            id='button_div'
            className='basis-1/5 py-3 mt-4 flex flex-row space-x-2'
          >
            <button
              onClick={onSubmit}
              disabled={isDisabled}
              className='px-4 py-1 text-sm text-white bg-green-600 font-semibold rounded-full border border-green-200 hover:text-white hover:bg-green-800 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2'
            >
              Add City Time
            </button>
            <button
              disabled={isDisabled}
              onClick={clearInputs}
              className='px-4 py-1 text-sm text-red-600 font-semibold rounded-full border border-red-200 hover:text-white hover:bg-red-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2'
            >
              Clear inputs
            </button>
          </div>
        </div>
        <div id='city_list' className='basis-1/5 ml-4 min-w-fit'>
          <CityList />
        </div>
      </div>
      <div id='middle-root' className='basis-1/12'></div>
      <div
        id='bottom_root'
        className='basis-5/12 mt-8 flex flex-wrap flex-row justify-center'
      >
        {activeClocks &&
          Object.keys(activeClocks).map((city: string) => (
            <div className='relative basis-1/5 mt-5' key={city}>
              <CityCard cityName={city} cityLabel={activeClocks[city]} />
              <button
                className='absolute top-1 text-red-600'
                onClick={() => {
                  delete activeClocks[city]
                  setActiveClocks({ ...activeClocks })
                }}
              >
                <RiDeleteBinLine color='red' size={24} />
              </button>
            </div>
          ))}
      </div>
      <div id='footer' className='basis-1/12 mt-8 flex flex-col justify-end'>
        <p className='text-center text-sm'>
          Made by{' '}
          <a
            className='text-yellow-400 underline hover:text-yellow-300'
            href='https://github.com/HerrineKim'
            target='_blank'
            rel='noopener noreferrer'
          >
            @herrineKim
          </a>
          <span> Mar. 5th. 2023</span>
        </p>
      </div>
    </div>
  )
}
