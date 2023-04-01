import {
  type Control,
  type FieldPath,
  type FieldValues,
  type RegisterOptions,
} from 'react-hook-form'

export { default as Input } from './input'
export { default as Select } from './select'
export { default as Label } from './label'
export { default as Radio } from './radio'
export { default as Checkbox } from './checkbox'

export interface IControl<T extends FieldValues> {
    control?: Control<T>
    name: FieldPath<T>
    rules?: Omit<
      RegisterOptions<T>,
      'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'
    >
  }
