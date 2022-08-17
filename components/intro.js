import { CMS_NAME, CMS_URL } from '../lib/constants'
import Image from 'next/image'
export default function Intro() {
  return (
    <section className="flex flex-col items-center mt-16 mb-16 md:flex-row md:justify-between md:mb-12">
      <h1 className="text-6xl font-bold leading-tight tracking-tighter md:text-8xl md:pr-8">
      <Image
        alt={""}
        src={"https://images.ctfassets.net/61iwodu7d9u0/6KCoMHg3sVMlEtHdzLlZtL/2982f4e3b3ccab2dcc766181cab8b4f1/MC-Logo-Full-Color.svg"}
        unoptimized={"true"}
        width={400}
        height={40}
      />
      </h1>
      <h4 className="mt-5 text-lg md:pl-8">
        <span className="block mb-2 text-center lg:mb-0 md:text-right">
          A statically generated blog example using{' '}
          <a
            href="https://nextjs.org/"
            className="underline transition-colors duration-200 hover:text-success"
          >
            Next.js
          </a>{' '}
          and{' '}
          <a
            href={CMS_URL}
            className="underline transition-colors duration-200 hover:text-success"
          >
            {CMS_NAME}
          </a>
          .
        </span>
        <span className="block text-center md:text-right">
          Made visually-editable by adding{' '}
          <a
            href="https://stackbit.com/"
            className="underline transition-colors duration-200 hover:text-success"
          >
            Stackbit
          </a>
          .
        </span>
      </h4>
    </section>
  )
}
