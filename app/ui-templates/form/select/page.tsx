'use client'

import { Input, Select } from '@/components/form'
import { useRef, useState } from 'react'

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
  function handleChange({ target: { name, value } }: React.ChangeEvent<HTMLSelectElement>) {
    setFruit(
      fruits.find(fruit => fruit.value === value)
    )
  }

  return (
    <div>
      <div>sample</div>
      <div>
        <div>
            선택된 과일 :
          {JSON.stringify(fruit)}
        </div>
        <Select
          label="과일을 고르세요"
          required
          className="w-full"
          items={fruits}
          onChange={handleChange}></Select>
      </div>
    </div>
  )
}
