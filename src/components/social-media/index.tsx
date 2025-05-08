import Image from 'next/image'
import Link from 'next/link'

import instagram from '@/assets/instagram.svg'
import tikTok from '@/assets/tik-tok.svg'
import whatsapp from '@/assets/whatsapp.svg'
import { env } from '@/configs/env-configs'

export function SocialMedia() {
  const whatsappNumber = env.NEXT_PUBLIC_WHATSAPP_NUMBER

  return (
    <div className="flex items-center gap-3">
      <Link
        href={'https://www.instagram.com/goodycosmeticos?igsh=ZjB3OGxsOHhmNW43'}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src={instagram}
          alt="Instagram"
          height={20}
          width={20}
          className="h-auto w-auto"
        />
      </Link>
      <Link
        href={'https://www.tiktok.com/@goodycosmeticos?_t=ZM-8wBb7eYutpm&_r=1'}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src={tikTok}
          alt="Tik Tok"
          height={20}
          width={20}
          className="h-auto w-auto"
        />
      </Link>
      <Link
        href={`https://wa.me/${whatsappNumber}`}
        target="_blank"
        rel="noopener noreferrer"
      >
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
