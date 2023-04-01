import { Fragment } from 'react'

interface IButtonProps extends React.ComponentProps<'button'> {
    size: 'mini' | 'small' | 'normal' | 'big' | 'huge'
    pending?: boolean
}

const sizeClasses: { [size in IButtonProps['size']]: string } = {
  mini: 'px-8pxr py-2pxr text-xs h-30pxr',
  small: 'px-14pxr py-4pxr text-sm h-40pxr',
  normal: 'px-20pxr py-6pxr text-md h-50pxr',
  big: 'px-26pxr py-8pxr text-lg h-60pxr',
  huge: 'px-32pxr py-10pxr text-xl h-70pxr',
}
const pendingSizeClasses: { [size in IButtonProps['size']]: string } = {
  mini: 'pl-14pxr after:w-12pxr after:h-12pxr after:left-6pxr after:top-9pxr',
  small: 'pl-18pxr after:w-16pxr after:h-16pxr after:left-9pxr after:top-12pxr',
  normal: 'pl-22pxr after:w-20pxr after:h-20pxr after:left-12pxr after:top-15pxr',
  big: 'pl-26pxr after:w-24pxr after:h-24pxr after:left-15pxr after:top-18pxr',
  huge: 'pl-30pxr after:w-28pxr after:h-28pxr after:left-18pxr after:top-21pxr',
}

export default function BaseButton({
  children,
  className,
  size,
  pending,
  ...props
}: IButtonProps) {
  const childWrapper = pending === true
    ? (
      <div className={`${pendingSizeClasses[size]} after:animate-spin after:absolute after:rounded-full after:border-2 after:border-white after:border-t-transparent`}>
        {children}
      </div>
    )
    : <Fragment>{children}</Fragment>

  const hasHoverAction = pending !== true && props.disabled !== true

  return (
    <button
      className={`
        border-none
        relative
        group
        disabled:bg-gray-500
        disabled:cursor-not-allowed
        ${sizeClasses[size]}
        ${className ?? ''} 
        ${pending === true ? 'cursor-wait' : ''}
      `}
      {...props}
    >
      {childWrapper}
      {hasHoverAction && <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 bg-white w-0pxr h-0pxr group-hover:opacity-25 group-hover:w-full group-hover:h-full transition-all '></div>}
    </button>
  )
}

export function PrimaryButton({
  children,
  className,
  ...props
}: IButtonProps) {
  return (
    <BaseButton
      {...props}
      className={`${className ?? ''} bg-primary text-white`}
    >
      {children}
    </BaseButton>
  )
}

export function SecondaryButton({
  children,
  className,
  ...props
}: IButtonProps) {
  return (
    <BaseButton
      {...props}
      className={`${className ?? ''} bg-secondary text-white`}
    >
      {children}
    </BaseButton>
  )
}
