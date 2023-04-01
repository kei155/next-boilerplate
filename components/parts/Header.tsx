import Link from '../Link'

import { Edu_TAS_Beginner as LogoFont } from 'next/font/google'

// If loading a variable font, you don't need to specify the font weight
const logoFont = LogoFont({ subsets: ['latin'] })

export default function Header() {
  return (
    <>
      <header className="w-full h-54pxr fixed flex items-center bg-primary text-white border-b-secondary border-b-8">
        <div className='flex-1 text-center'>
          <Link href='/' className={logoFont.className}>Everything I Need</Link>
        </div>
      </header>
    </>
  )
}
