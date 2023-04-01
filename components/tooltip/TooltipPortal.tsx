import { useEffect, useRef } from 'react'
import ReactDOM from 'react-dom'
import { CSSTransition } from 'react-transition-group'

interface IPositionForTooltipTarget {
    style: { left: number, top: number }
    type: string
}

const getPosition = (ref: React.RefObject<HTMLElement>, gap = 5): IPositionForTooltipTarget => {
  const rect = ref.current?.getBoundingClientRect() ?? { top: 0, left: 0 }
  const h = ref.current?.clientHeight as number
  const isAbove = (rect?.top + h / 2) <= window.innerHeight / 2
  const top = rect.top + (isAbove ? h + gap : -gap)
  // 좌우, 대각선 조건도 추가하면 좋을듯?
  const w = ref.current?.clientWidth as number
  const left = rect.left + (w / 2)

  return {
    style: { left, top },
    type: isAbove ? 'bottom' : 'top'
  }
}

export interface ITooltipPortal {
    children: React.ReactNode
    show: boolean
    target: React.RefObject<HTMLElement>
    gap?: number
    onClickOutside: () => void
}

const useClickOutside = (target: React.RefObject<HTMLElement>, ref: React.RefObject<HTMLElement>, handler: () => void) => {
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        ref.current?.contains(e.target as HTMLElement) !== true &&
        target.current?.contains(e.target as HTMLElement) !== true
      ) {
        handler()
      }
    }

    document.addEventListener('click', handleClickOutside)

    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [target, ref, handler])
}

export default function TooltipPortal({
  children,
  show,
  target,
  gap,
  onClickOutside,
}: ITooltipPortal) {
  const wrapper = useRef<HTMLDivElement>(null)
  useClickOutside(target, wrapper, onClickOutside)

  if (!show) {
    return null
  }

  const root = document.getElementById('tooltips')
  if (root === null) {
    return null
  }

  const position = getPosition(target, gap)

  const PortalWrapper = (
    <>
      <CSSTransition
        nodeRef={wrapper}
        in={show}
        timeout={0}
        classNames={{
          appear: 'opacity-0 transition-opacity',
          appearActive: 'opacity-1 transition-opacity',
          appearDone: 'opacity-1 transition-opacity',
          enter: 'opacity-1 transition-opacity',
          enterActive: 'opacity-1 transition-opacity',
          enterDone: 'opacity-1 transition-opacity',
          exit: 'opacity-1 transition-opacity',
          exitActive: 'opacity-1 transition-opacity',
          exitDone: 'opacity-0 transition-opacity',
        }}
        appear
      >
        <div ref={wrapper}
          className='absolute -translate-x-1/2'
          style={position.style}
        >{children}</div>
      </CSSTransition>
    </>
  )

  return ReactDOM.createPortal(PortalWrapper, root)
}
