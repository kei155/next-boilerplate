import React, { useId } from 'react'
import { Label } from '@/components/form'

interface IInputProps extends React.ComponentProps<'input'> {
    type: 'text'
        | 'number'
        | 'search'
        | 'email'
        | 'password'
        | 'tel'
    id?: string
    label?: string
    placeholder?: string
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export default function Input({
  id,
  label,
  type,
  value,
  name,
  className,
  placeholder,
  required,
  onChange,
}: IInputProps) {
  const generatedId = useId()
  const forId = id ?? generatedId

  return (
    <>
      <div
        data-form-item
        className="relative py-8pxr"
      >
        {
          label !== undefined &&
          label !== '' &&
            <Label
              htmlFor={forId}
              required={required}
            >{label}</Label>
        }
        <input
          id={forId}
          type={type}
          value={value}
          className={`${className ?? ''} h-40pxr border p-16pxr`}
          onChange={onChange}
          placeholder={placeholder}
        />
      </div>
    </>
  )
}
