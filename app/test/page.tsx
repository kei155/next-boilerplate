import Counter from './Counter'
import Image from 'next/image'

export default function Page () {
  return (
    <>
      <h1>Example : Zustand Hydrate</h1>
      <Image src='https://assets.eineed.studio/2761EF4E583BB67323.png' alt='' width={300} height={200}></Image>
      <Counter></Counter>
    </>
  )
}
