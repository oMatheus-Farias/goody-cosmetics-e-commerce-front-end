import Image from 'next/image'
import Link from 'next/link'

import instagram from '@/assets/instagram.svg'
import tikTok from '@/assets/tik-tok.svg'
import whatsapp from '@/assets/whatsapp.svg'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="flex h-20 min-h-20 w-full items-center justify-between bg-gray-100 px-2">
      <span className="text-xs font-normal text-gray-400">
        {`© ${currentYear} Copyright ❤️ `}
        <span className="font-semibold">Goody Cosméticos</span>
      </span>
      <div className="flex items-center gap-3">
        <Link href={'*'}>
          <Image
            src={instagram}
            alt="Instagram"
            height={20}
            width={20}
            className="h-auto w-auto"
          />
        </Link>
        <Link href={'*'}>
          <Image
            src={tikTok}
            alt="Tik Tok"
            height={20}
            width={20}
            className="h-auto w-auto"
          />
        </Link>
        <Link href={'*'}>
          <Image
            src={whatsapp}
            alt="Whatsapp"
            height={20}
            width={20}
            className="h-auto w-auto"
          />
        </Link>
      </div>
    </footer>
  )
}
