'use client'

import toast from 'react-hot-toast'

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
        style: {
          minWidth: '400px',
          maxWidth: '400px',
          borderRadius: '6px',
          background: '#dedede',
          color: 'black',
        },
      }
    )
  }

  return {
    toast: {
      base,
      success,
    }
  }
}

interface IToastProps {
    id: string
    visible: boolean
    status: string
    message: string
}

const DefaultSnackBar = ({
  id,
  visible,
  status,
  message,
}: IToastProps) => {
  return (
    <div className={
      `${visible ? 'animate-spin' : 'animate-bounce'}`
    }>
      <div>
        <span>[{visible ? 'true' : 'false'}][{status}] {message}</span>
      </div>
      <button onClick={() => { toast.dismiss(id) }}>
        닫기
      </button>
    </div>
  )
}
