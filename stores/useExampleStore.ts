import { create, StateCreator } from 'zustand'
import { persist, createJSONStorage, PersistOptions } from 'zustand/middleware'
import { type TStorePersist } from '.'

interface IActions {
  increment: () => void
  reset: () => void
}

interface IComputes {
  computeDouble: () => number
}

interface IState {
  count: number
}

const initialState: IState = {
  count: 0
}

export interface IExampleStore extends IActions, IComputes, IState {
  //
}

const useExampleStore = create<IExampleStore>(
  (persist as TStorePersist<IExampleStore>)(
    (set, get) => ({
      ...initialState,
      increment: () => { set(state => ({ count: state.count + 1 })) },
      computeDouble: () => get().count * 2,
      reset: () => { set(initialState) }
    }),
    {
      name: 'exampleStore',
      storage: createJSONStorage(
        () => window
          ? sessionStorage
          : {
            getItem: async (name) => await new Promise(resolve => { sessionStorage ? setTimeout(() => { resolve(sessionStorage.getItem(name)) }, 0) : resolve(null) }),
            setItem: (name, value) => { },
            removeItem: (name) => { }
          }
      )
    }
  )
)

export default useExampleStore
