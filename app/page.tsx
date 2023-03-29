import Image from 'next/image'
import { Nanum_Gothic } from 'next/font/google'
import styles from './page.module.css'
import Link from '@/components/Link'

const nanumGothic = Nanum_Gothic({ subsets: ['latin'], weight: ['400', '700', '800'] })

export default function Home () {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          <Link href="/test">Get started by editing&nbsp;</Link>
          <code className={styles.code}>app/page.tsx</code>
        </p>
        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
                        By{' '}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className={styles.vercelLogo}
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
        <div className={styles.thirteen}>
          <Image
            src="/thirteen.svg"
            alt="13"
            width={40}
            height={31}
            priority
          />
        </div>
      </div>

      <div className={styles.grid}>
        <a
          href="https://beta.nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={nanumGothic.className}>
                        Docs <span>-&gt;</span>
          </h2>
          <p className={nanumGothic.className}>
                        Find in-depth information about Next.js features and
                        API.
          </p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={nanumGothic.className}>
                        Templates <span>-&gt;</span>
          </h2>
          <p className={nanumGothic.className}>
                        Explore the Next.js 13 playground.
          </p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={nanumGothic.className}>
                        Deploy <span>-&gt;</span>
          </h2>
          <p className={nanumGothic.className}>
                        Instantly deploy your Next.js site to a shareable URL
                        with Vercel.
          </p>
        </a>
      </div>
    </main>
  )
}
