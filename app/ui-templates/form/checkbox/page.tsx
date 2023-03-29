
'use client'

import Checkbox from '@/components/form/checkbox'
import { Label } from '@/components/form'
import { useState } from 'react'

interface IPokemon {
  name: string
  id: number
}

export default function Page() {
  const pokemons: IPokemon[] = [
    { name: '피카츄', id: 1 },
    { name: '파이리', id: 2 },
    { name: '꼬부기', id: 3 },
  ]
  const [checkedPokemons, setCheckedPokemos] = useState<IPokemon[]>([])

  return (
    <>
      <div>
        <div>sample</div>
        <div>
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
      </div>
    </>
  )
}
