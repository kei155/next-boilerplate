import { SecondaryButton } from '@/components/button'
import Link from '@/components/Link'
import LoginForm from './LoginForm'

import { BuildingOffice2Icon } from '@heroicons/react/24/solid'

export default function Page() {
  return (
    <>
      <div className='w-full h-screen bg-gradient-to-b from-blue-400 to-primary'>
        <div className="rounded bg-white fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 p-30pxr shadow-lg w-[90%] max-w-lg">
          <section className='pb-20pxr text-2xl font-bold text-primary'>
            <div className='flex items-end'>
              <BuildingOffice2Icon className='w-40pxr h-40pxr mr-8pxr'></BuildingOffice2Icon>
              <div>판매자센터 로그인</div>
            </div>
          </section>
          <section>
            <LoginForm></LoginForm>
          </section>
          <section className='pt-10pxr pb-10pxr'>
            <Link href='/playground/sell/apply'>
              <SecondaryButton className='w-full' size='normal'>입점 신청</SecondaryButton>
            </Link>
          </section>
          <section className='text-right'>
            <Link href='/sf' className=' text-blue-500 hover:underline hover:underline-offset-4'>비밀번호를 잊으셨어요?</Link>
          </section>
        </div>
      </div>
    </>
  )
}
