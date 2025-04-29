import { SocialMedia } from '../social-media'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="mt-10 flex h-20 min-h-20 w-full items-center justify-between bg-gray-100 px-2 md:px-5">
      <span className="text-xs font-normal text-gray-400">
        {`© ${currentYear} Copyright ❤️ `}
        <span className="font-semibold">Goody Cosméticos</span>
      </span>
      <SocialMedia />
    </footer>
  )
}
