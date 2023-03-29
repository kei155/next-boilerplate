'use client'

import { Label, Radio } from '@/components/form'
import { useState } from 'react'

interface IFruit {
    text: string
    value: string
}

export default function Page() {
  const fruits: IFruit[] = [
    { text: 'Apple', value: 'Apple' },
    { text: 'Orange', value: 'Orange' },
    { text: 'Banana', value: 'Banana' },
  ]
  const [fruit, setFruit] = useState<IFruit | undefined>(fruits[0])
  function handleChange(item: { value: IFruit }) {
    setFruit(item.value)
  }

  return (
    <div>
      <div>sample</div>
      <div>
        <div>
            선택된 과일 :
          {JSON.stringify(fruit)}
        </div>
        <Label.Standalone required>과일을 골라보세요</Label.Standalone>
        <Radio
          itemClassName='py-4pxr'
          checkedItemKey={fruit?.value}
          items={fruits.map(fruit => ({ key: fruit.value, text: fruit.text, value: fruit }))}
          onChangeItem={handleChange}
        ></Radio>

        <Label.Standalone required>과일을 골라보세요</Label.Standalone>
        <Radio
          className='flex'
          itemClassName='pr-12pxr'
          checkedItemKey={fruit?.value}
          items={fruits.map(fruit => ({ key: fruit.value, text: fruit.text, value: fruit }))}
          onChangeItem={handleChange}
        ></Radio>
      </div>
    </div>
  )
}
