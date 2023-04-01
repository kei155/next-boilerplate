import { useId, useState } from 'react'
import checkIcon from '@/assets/ico_check.svg'
import Image from 'next/image'
import { useController, type FieldValues } from 'react-hook-form'
import { type IControl } from '..'

export interface ICheckboxProps extends React.ComponentProps<'input'> {
  label?: React.ReactNode
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}
export default function Checkbox<IForm extends FieldValues>({
  id,
  label,
  required,
  className,
  checked,
  name,
  rules,
  control,
  onChange: propOnChange,
}: ICheckboxProps & IControl<IForm>) {
  const generatedId = useId()
  const forId = id ?? generatedId

  const {
    field,
    fieldState,
  } = useController({ name, rules, control })

  const [isChecked, setIsChecked] = useState(checked === true)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(!isChecked)
    if (propOnChange != null) {
      propOnChange(e)
    }

    field.onChange(e)
  }

  return (
    <>
      <div data-form-item className={`${className ?? ''} flex items-center`}>
        <div
          className='inline-block border w-20pxr h-20pxr mr-6pxr p-2pxr'
          onClick={() => { setIsChecked(!isChecked) }}
        >
          {
            isChecked &&
            <Image src={checkIcon} alt='선택됨'></Image>
          }
        </div>
        <input
          id={forId}
          type="checkbox"
          value={field.value}
          onChange={handleChange}
          onBlur={field.onBlur}
          className='appearance-none'
          data-t={field.value}
        />
        {
          label !== undefined &&
          label !== '' &&
            <label
              htmlFor={forId}
              className={`${isChecked ? 'text-primary' : ''} flex items-center`}
            >
              {label}
              {required === true && <span className='text-red-500'>(필수)</span>}
            </label>
        }
        {fieldState.error != null && <div>{fieldState.error.message}</div>}
      </div>
    </>
  )
}
