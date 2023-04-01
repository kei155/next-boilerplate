import { PageTitle, SectionTitle } from '@/components/semantic'
import { EnvelopeIcon } from '@heroicons/react/24/solid'

export default function Page() {
  return (
    <>
      <PageTitle>Resume</PageTitle>

      <section>
        <SectionTitle>Contact</SectionTitle>

        <ul>
          <li>
            <a href='mailto:owneul@gmail.com' className='flex items-center'>
              <EnvelopeIcon className='w-24pxr h-24pxr mr-4pxr'></EnvelopeIcon>
              <span>owneul@gmail.com</span>
            </a>
          </li>
        </ul>
      </section>

      <section>
        <SectionTitle>Project</SectionTitle>
      </section>
    </>
  )
}
