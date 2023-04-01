import { useId } from 'react'
import { Label } from '..'

interface ISelectItem<T> {
    text: string
    value: T
}
interface ISelectProps<T = any> extends React.ComponentProps<'select'> {
    items: Array<ISelectItem<T>>
    id?: string
    label?: string
    textWhenEmpty?: string
}

export default function Select({
  id,
  label,
  items,
  textWhenEmpty,
  required,
  value,
  className,
  onChange,
}: ISelectProps<any>) {
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
        <select
          id={forId}
          value={value}
          className={`${className ?? ''} h-50pxr border pl-16pxr pr-32pxr`}
          onChange={onChange}
        >
          {
            items.map(
              item => (
                <option
                  key={item.value}
                  value={item.value}
                >{item.text}</option>
              )
            )
          }
        </select>
      </div>
    </>
  )
}
