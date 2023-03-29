'use client'

import { Checkbox, Input, Label, Radio, Select } from '@/components/form'
import { useState } from 'react'

interface IFruit {
    text: string
    value: string
}

interface IPokemon {
    name: string
    id: number
}

export default function Page() {
  const [text1, setText1] = useState('')
  const [text2, setText2] = useState('')

  const fruits: IFruit[] = [
    { text: 'Apple', value: 'Apple' },
    { text: 'Orange', value: 'Orange' },
    { text: 'Banana', value: 'Banana' },
  ]
  const [fruit, setFruit] = useState<IFruit | undefined>(fruits[0])

  const pokemons: IPokemon[] = [
    { name: '피카츄', id: 1 },
    { name: '파이리', id: 2 },
    { name: '꼬부기', id: 3 },
  ]
  const [checkedPokemons, setCheckedPokemos] = useState<IPokemon[]>([])

  return (
    <>
      <div>
        <div className='text-xl'>Form</div>
        <div id='input'>
          <div>Input (Text, Number...)</div>
          <div>
            <Input
              label="배송메세지"
              type="text"
              name="example"
              value={text1}
              placeholder="플레이스홀더"
              onChange={(e) => { setText1(e.target.value) }}
            ></Input>

            <Input
              label="이메일"
              type="email"
              name="example"
              value={text2}
              required
              placeholder="플레이스홀더"
              onChange={(e) => { setText2(e.target.value) }}
            ></Input>
          </div>
        </div>

        <div id='select'>
          <div>Select</div>
          <div>
            <div>
            선택된 과일 :
              {JSON.stringify(fruit)}
            </div>
            <Select
              label="과일을 골라보세요"
              required
              className="w-full"
              items={fruits}
              onChange={(e) => {
                setFruit(
                  fruits.find(fruit => fruit.value === e.target.value)
                )
              }}
            ></Select>
          </div>
        </div>

        <div id='checkbox'>
          <div>Checkbox</div>
          <div>
            선택된 포켓몬 : {checkedPokemons.map(pokemon => pokemon.name).join(', ')}
          </div>
          <Label.Standalone required>포켓몬을 선택하세요</Label.Standalone>
          {
            pokemons.map(({ id, name }) => {
              const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
                setCheckedPokemos(
                  [
                    ...checkedPokemons.filter(pokemen => pokemen.id !== id),
                    ...(e.target.checked ? [{ id, name }] : [])
                  ]
                )
              }

              return <Checkbox key={id} label={name} onChange={handleChange}></Checkbox>
            })
          }
        </div>

        <div id='radio'>
          <div>Radio</div>
          <div>
            선택된 과일 :
            {JSON.stringify(fruit)}
          </div>
          <Label.Standalone required>과일을 골라보세요</Label.Standalone>
          <Radio
            itemClassName='py-4pxr'
            checkedItemKey={fruit?.value}
            items={fruits.map(fruit => ({ key: fruit.value, text: fruit.text, value: fruit }))}
            onChangeItem={item => { setFruit(item.value) }}
          ></Radio>

          <Label.Standalone required>과일을 골라보세요</Label.Standalone>
          <Radio
            className='flex'
            itemClassName='pr-12pxr'
            checkedItemKey={fruit?.value}
            items={fruits.map(fruit => ({ key: fruit.value, text: fruit.text, value: fruit }))}
            onChangeItem={item => { setFruit(item.value) }}
          ></Radio>
        </div>
      </div>
    </>
  )
}
