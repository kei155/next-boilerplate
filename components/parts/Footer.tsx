import { EnvelopeIcon } from '@heroicons/react/24/solid'

export default function Footer() {
  return (
    <>
      <footer className='text-primary bg-slate-100 px-20pxr py-12pxr'>
        <div>
          <p className='opacity-80 text-sm'>CONTACT</p>
          <div className='opacity-50'>
            <a href='mailto:owneul@gmail.com' className='flex items-center text-xs'>
              <EnvelopeIcon className='w-16pxr h-16pxr mr-4pxr'></EnvelopeIcon>
              <span>owneul@gmail.com</span>
            </a>
          </div>
        </div>
      </footer>
    </>
  )
}
