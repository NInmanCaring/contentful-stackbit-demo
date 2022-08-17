import Link from 'next/link'
import Image from 'next/image'
export default function Header() {
  return (
    <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8">
      <Link href="/">
      <Image
        alt={""}
        src={"https://images.ctfassets.net/61iwodu7d9u0/6KCoMHg3sVMlEtHdzLlZtL/2982f4e3b3ccab2dcc766181cab8b4f1/MC-Logo-Full-Color.svg"}
        unoptimized={"true"}
        width={400}
        height={40}
      />
      </Link>
    </h2>
  )
}
