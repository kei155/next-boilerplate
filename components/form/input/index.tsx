import React, { useId } from 'react'
import { Label, type IControl } from '@/components/form'
import { type FieldValues, useController } from 'react-hook-form'
import ErrorMessage from '../ErrorMessage'

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
}

export default function Input<IForm extends FieldValues>({
  id,
  label,
  type,
  name,
  className,
  placeholder,
  required,
  control,
  onChange: propOnChange,
  rules,
}: IInputProps & IControl<IForm>) {
  const generatedId = useId()
  const forId = id ?? generatedId

  const {
    field,
    fieldState,
  } = useController({ name, rules, control })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (propOnChange != null) {
      propOnChange(e)
    }

    field.onChange(e)
  }

  return (
    <>
      <div
        data-form-item
        className={`${className ?? ''} relative py-8pxr`}
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
          value={field.value}
          className={`${className ?? ''} h-50pxr border p-16pxr outline-none appearance-none`}
          onChange={handleChange}
          onBlur={field.onBlur}
          placeholder={placeholder}
        />
        {fieldState.error != null && <ErrorMessage>{fieldState.error.message}</ErrorMessage>}
      </div>
    </>
  )
}
