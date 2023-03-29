import { useId, useState } from 'react'
import checkIcon from '@/assets/ico_check.svg'
import Image from 'next/image'

export interface ICheckboxProps extends React.ComponentProps<'input'> {
  label?: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}
export default function Checkbox({
  id,
  label,
  required,
  checked,
  onChange,
}: ICheckboxProps) {
  const generatedId = useId()
  const forId = id ?? generatedId

  const [isChecked, setIsChecked] = useState(checked === true)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(!isChecked)
    onChange(e)
  }

  return (
    <>
      <div data-form-item className='flex items-center'>
        <div className='inline-block w-20pxr h-20pxr border mr-6pxr p-2pxr'>
          {
            isChecked &&
            <Image src={checkIcon} alt='선택됨'></Image>
          }
        </div>
        <input
          id={forId}
          type="checkbox"
          onChange={handleChange}
          className='appearance-none'
        />
        {
          label !== undefined &&
          label !== '' &&
            <label htmlFor={forId}>{label}</label>
        }
      </div>
    </>
  )
}
