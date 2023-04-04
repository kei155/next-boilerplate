'use client'

import toast, { CheckmarkIcon, ErrorIcon } from 'react-hot-toast'

export default function useSnackBar() {
  const base = (message: string) => {
    toast(
      (toast) => (
        <DefaultSnackBar
          visible={toast.visible}
          status={'Default'}
          message={message}
          id={toast.id} />
      ),
      {
        duration: 5000,
        style: {
          minWidth: '400px',
          maxWidth: '400px',
          borderRadius: '6px',
          background: '#333',
          color: '#fff',
        },
      }
    )
  }

  const success = (message: string) => {
    toast(
      (toast) => (
        <DefaultSnackBar
          visible={toast.visible}
          status={'Success'}
          message={message}
          id={toast.id} />
      ),
      {
        duration: 5000,
      }
    )
  }

  const error = (message: string) => {
    toast(
      (toast) => (
        <DefaultSnackBar
          visible={toast.visible}
          status={'Error'}
          message={message}
          id={toast.id} />
      ),
      {
        duration: 700000,
      }
    )
  }

  return {
    toast: {
      base,
      success,
      error,
    }
  }
}

interface IToastProps {
    id: string
    visible: boolean
    status: string
    message: React.ReactNode
}

const DefaultSnackBar = ({
  id,
  visible,
  status,
  message,
}: IToastProps) => {
  return (
    <div
      className='bg-white pointer-events-auto flex gap-20pxr'
    >
      {status === 'Error' && <ErrorIcon></ErrorIcon>}
      {status === 'Success' && <CheckmarkIcon></CheckmarkIcon>}
      <div className='flex-1'>{message}</div>
      <button className='text-gray-500' onClick={() => { toast.dismiss(id) }}>닫기</button>
    </div>
  )
}
