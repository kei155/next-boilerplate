'use client'

import TooltipPortal from '@/components/tooltip/TooltipPortal'
import { MapPinIcon } from '@heroicons/react/24/solid'
import { useRouter } from 'next/navigation'
import { useRef, useState } from 'react'

export default function MainSearcher() {
  const [showTooltip, setShowTooltip] = useState(false)
  const searchInput = useRef<HTMLInputElement>(null)

  const router = useRouter()
  const handleKeyEvent = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.currentTarget.value === '') {
      return
    }

    if (e.key === 'Enter') {
      router.push(`/search?word=${e.currentTarget.value}`)
    }
  }

  const handleFocus = () => {
    setShowTooltip(true)
  }
  const handleClickOutside = () => {
    setShowTooltip(false)
  }

  /** 내 주변에서 찾기 클릭됨 처리 */
  const handleClickNearSearch = () => {
    router.push('/map')
  }

  return (
    <>
      <input
        ref={searchInput}
        type='search'
        placeholder='망원동 맛집 🥳'
        className="text-2xl w-full max-w-3xl h-50pxr border-b border-b-primary border-opacity-25 outline-none search-cancel:hidden text-center focus:placeholder:opacity-0 placeholder:text-center"
        onKeyDown={handleKeyEvent}
        onFocus={handleFocus}
      ></input>
      {
        (
          <TooltipPortal
            show={showTooltip}
            target={searchInput}
            gap={20}
            onClickOutside={handleClickOutside}
          >
            <div
              className='cursor-pointer flex items-center bg-secondary text-white pl-10pxr pr-12pxr py-4pxr rounded-md shadow-md'
              onClick={handleClickNearSearch}
            >
              <div className='bg-secondary w-12pxr h-12pxr absolute rotate-45 left-1/2 -translate-x-6pxr -top-6pxr'></div>
              <MapPinIcon className='w-32pxr h-32pxr animate-pulse mr-4pxr'></MapPinIcon>
              <p className='text-lg'>내 주변에서 찾아보기!</p>
            </div>
          </TooltipPortal>
        )
      }
    </>
  )
}
