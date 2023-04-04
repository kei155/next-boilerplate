import { RocketLaunchIcon } from '@heroicons/react/24/solid'
import ApplyForm from './ApplyForm'

export default async function Page() {
  return (
    <>
      <div>
        <section className='h-30pxr from-blue-500 to-primary bg-gradient-to-t'></section>
        <section className="font-bold text-2xl text-primary p-15pxr max-w-3xl mx-auto">
          <div className="flex items-end">
            <RocketLaunchIcon className="w-40pxr h-40pxr mr-8pxr"></RocketLaunchIcon>
            <div>입점 신청</div>
          </div>
        </section>
        <section className='max-w-3xl mx-auto'>
          <ApplyForm></ApplyForm>
        </section>
        <section>
        </section>
      </div>
    </>
  )
}
