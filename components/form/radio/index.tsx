import { useEffect, useId, useState } from 'react'

export interface IRadioItemProps extends React.ComponentProps<'input'> {}
function Item({
  id,
  checked,
  children,
  className,
  onChange,
}: IRadioItemProps) {
  const generatedId = useId()
  const forId = id ?? generatedId

  return (
    <div className={`${className ?? ''} flex items-center`}>
      <div className='inline-block border rounded-full w-20pxr h-20pxr mr-6pxr p-3pxr'>
        {
          checked === true &&
          <div className='w-full h-full rounded-full bg-primary'></div>
        }
      </div>
      <input
        id={forId}
        type="radio"
        checked={checked}
        onChange={onChange}
        className='appearance-none'
      />
      <label
        htmlFor={forId}
        className={`${checked === true ? 'text-primary' : ''}`}
      >{children}</label>
    </div>
  )
}

export interface IRadioItem<T = any> {
    key: string | number
    text: string
    value: T
}
export interface IRadioProps extends Pick<React.ComponentProps<'div'>, 'className'> {
    checkedItemKey?: string | number
    items: IRadioItem[]
    onChangeItem: (item: IRadioItem) => void
    itemClassName?: IRadioItemProps['className']
}

function Radio({
  checkedItemKey,
  items,
  className,
  itemClassName,
  onChangeItem,
}: IRadioProps) {
  const [checkedItem, setCheckedItem] = useState<IRadioItem | undefined>(
    items.find(item => item.key === checkedItemKey)
  )

  useEffect(() => {
    setCheckedItem(items.find(item => item.key === checkedItemKey))
  }, [items, checkedItemKey])

  return (
    <>
      <div data-form-item className={className}>
        {items.map(({ key, text, value }) => {
          const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            setCheckedItem({ key, text, value })
            if (checkedItem !== undefined && checkedItem.key !== key) {
              onChangeItem({ key, text, value })
            }
          }

          return (
            <Item
              className={itemClassName}
              key={key}
              checked={checkedItem?.key === key}
              onChange={handleChange}
            >
              {text}
            </Item>
          )
        })}
      </div>
    </>
  )
}

export default Object.assign(Radio, { Item })
