'use client'

import { LogoDeteksiDiniWhite } from "@/components/assets/icons"
import { Separator } from "@/components/ui/separator"

interface HeaderNavigationProps {
  title?: string
}

function HeaderNavigation({title}: HeaderNavigationProps) {
  return (
    <header className="fixed left-0 top-0 w-full shadow bg-gradient-to-b from-primary to-primary-blue2 z-10">
    {/* <header className="fixed top-0 h-16 border max-w-screen-sm w-full shadow bg-gradient-to-b from-primary to-primary/80"> */}
    <div className="max-w-screen-sm mx-auto h-full px-2">
      <div className="my-3 flex space-x-3 items-center">
        <LogoDeteksiDiniWhite width={135} />
        {title && <h3 className="border-l pl-2 text-white">{title}</h3>}
      </div>
    </div>
  </header>
  )
}

export default HeaderNavigation