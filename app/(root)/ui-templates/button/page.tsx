'use client'

import { PrimaryButton, BaseButton } from '@/components/button'
import { SecondaryButton } from '@/components/button/BaseButton'
import { useState } from 'react'

export default function Page() {
  const [isPending, setIsPending] = useState(true)
  const handleClick = () => {
    if (isPending) {
      return
    }

    setIsPending(true)
    setTimeout(() => {
      setIsPending(false)
    }, 1000)
  }

  return (
    <>
      <div>
        <div>sample</div>
        <div>size</div>
        <div className='flex items-end gap-8pxr'>
          <PrimaryButton size='mini'>mini 버튼</PrimaryButton>
          <PrimaryButton size='small'>small 버튼</PrimaryButton>
          <PrimaryButton size='normal'>normal 버튼</PrimaryButton>
          <PrimaryButton size='big'>big 버튼</PrimaryButton>
          <PrimaryButton size='huge'>huge 버튼</PrimaryButton>
        </div>

        <div>color</div>
        <div className='flex items-end gap-8pxr'>
          <PrimaryButton size='normal'>Primary</PrimaryButton>
          <SecondaryButton size='normal'>Secondary</SecondaryButton>
          <BaseButton size='normal' className='bg-black text-white'>임의색상 버튼</BaseButton>
        </div>

        <div>state</div>
        <div className='flex items-end gap-8pxr'>
          <PrimaryButton size='normal' disabled>Disabled</PrimaryButton>
          <PrimaryButton pending={isPending} onClick={handleClick} size='mini'>Pending</PrimaryButton>
          <PrimaryButton pending={isPending} onClick={handleClick} size='small'>Pending</PrimaryButton>
          <PrimaryButton pending={isPending} onClick={handleClick} size='normal'>Pending</PrimaryButton>
          <SecondaryButton pending={isPending} onClick={handleClick} size='big'>Pending</SecondaryButton>
          <PrimaryButton pending={isPending} onClick={handleClick} size='huge'>Pending</PrimaryButton>
        </div>
      </div>
    </>
  )
}
