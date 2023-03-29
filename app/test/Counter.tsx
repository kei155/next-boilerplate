'use client'

import useSnackBar from '@/hooks/useSnackBar'
import useExampleStore from '@/stores/useExampleStore'
import Todos from './Todos'

export default function Counter() {
  const { toast } = useSnackBar()

  const openToast = () => {
    toast.success('ㅁㄴㄹㅇ')
  }

  // const {
  //     count,
  //     doubleCount,
  //     increment,
  // } = useExampleStore(state => ({
  //     count: state.count,
  //     doubleCount: state.computeDouble(),
  //     increment: state.increment,
  // }))
  const { count, doubleCount, increment } = useExampleStore((state) => ({
    count: state.count,
    doubleCount: state.computeDouble(),
    increment: state.increment
  }))

  return (
    <div className='w-full h-10 overflow-y-auto scrollbar-hide'>
      <div className=' h-96'>Count: {count}</div>
      <div>Double Count: {doubleCount}</div>
      <div>
        <button onClick={increment}>증가</button>
      </div>
      <button onClick={openToast}>토스트</button>
      <Todos></Todos>
    </div>
  )
}
