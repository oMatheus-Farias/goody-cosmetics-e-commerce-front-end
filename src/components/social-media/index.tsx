import Image from 'next/image'
import Link from 'next/link'

import instagram from '@/assets/instagram.svg'
import tikTok from '@/assets/tik-tok.svg'
import whatsapp from '@/assets/whatsapp.svg'

export function SocialMedia() {
  return (
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
  )
}
