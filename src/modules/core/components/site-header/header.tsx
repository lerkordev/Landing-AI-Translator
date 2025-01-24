import { useState } from 'react'
import MobileHeader from './mobile-header'
import MenuHeader from './site-header'

const HeaderComponent = () => {
  const [openMobileMenu, setOpenMobileMenu] = useState(false)
  return (
    <header className=" flex flex-col bg-[#ffffff]/85 headerStyle flex justify-between sticky w-full top-0 z-40">
      <div className="bg-[#D7E1E9] text-center font-semibold text-sm py-2 text-[#313435] relative">
        Meet Repurpose Studio: Get social-ready clips from one video.{' '}
        <span className="text-[#0083e2] hover:underline">Take me there →</span>
      </div>
      <nav className="px-6 py-3">
        <MenuHeader setOpenMobileMenu={setOpenMobileMenu} />
        {openMobileMenu && <MobileHeader openMobileMenu={openMobileMenu} setOpenMobileMenu={setOpenMobileMenu} />}
      </nav>
    </header>
  )
}

export default HeaderComponent
