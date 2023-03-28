import { useEffect, useState } from 'react'
import { type StateCreator } from 'zustand'
import { type PersistOptions } from 'zustand/middleware/persist'

export type TStorePersist<T> = (
  config: StateCreator<T>,
  options: PersistOptions<T>
) => StateCreator<T>

export const useStore = <T, F>(
  store: (callback: (state: T) => unknown) => unknown,
  callback: (state: T) => F
): F | undefined => {
  const result = store(callback) as F
  const [data, setData] = useState<F>()

  useEffect(() => {
    setData(result)
  }, [result])

  return data
}
