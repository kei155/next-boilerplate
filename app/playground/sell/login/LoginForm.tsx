'use client'

import { PrimaryButton } from '@/components/button'
import { Checkbox, Input } from '@/components/form'
import { useForm } from 'react-hook-form'

export interface ILoginForm {
    email: string
    password: string
    remember_email: boolean
}
export default function LoginForm() {
  const {
    control,
    formState: { isSubmitting },
    handleSubmit: onSubmit
  } = useForm<ILoginForm>({
    mode: 'onBlur',
    defaultValues: {
      email: '',
      password: '',
      remember_email: false,
    }
  })

  const handleSubmit = async (data: ILoginForm) => {
    await new Promise<void>((resolve) => {
      setTimeout(() => {
        alert(JSON.stringify(data, null, 2))
        resolve()
      }, 3000)
    })
  }

  return (
    <>
      <form onSubmit={onSubmit(handleSubmit)}>
        <div>
          <Input<ILoginForm>
            name='email'
            control={control}
            className='w-full'
            type='email'
            placeholder="셀러 아이디(이메일)"
            rules={{
              required: '셀러 아이디를 입력해주세요'
            }}
          ></Input>

          <Input<ILoginForm>
            name='password'
            control={control}
            className='w-full'
            type='password'
            placeholder="비밀번호"
            rules={{
              required: '비밀번호를 입력해주세요'
            }}
          ></Input>

          <Checkbox
            name='remember_email'
            control={control}
            className='pt-5pxr'
            label='이메일 기억하기'
          ></Checkbox>
        </div>

        <div className='pt-25pxr'>
          <PrimaryButton
            className='w-full'
            size='normal'
            pending={isSubmitting}
          >로그인</PrimaryButton>
        </div>
      </form>
    </>
  )
}
