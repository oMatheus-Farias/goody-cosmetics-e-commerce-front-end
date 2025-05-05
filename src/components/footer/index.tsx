import { SocialMedia } from '../social-media'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="h-20 min-h-20 w-full bg-gray-100 px-2 md:px-5">
      <div className="mx-auto flex h-full w-full max-w-[1330px] items-center justify-between">
        <span className="text-xs font-normal text-gray-400">
          {`© ${currentYear} Copyright ❤️ `}
          <span className="font-semibold">Goody Cosméticos</span>
        </span>
        <SocialMedia />
      </div>
    </footer>
  )
}
