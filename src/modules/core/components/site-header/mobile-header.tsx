import type { MobileHeaderProps } from '@/types'
import { useNavigate } from 'react-router-dom'
import type { KeyboardEvent } from 'react'

const MobileHeader: React.FC<MobileHeaderProps> = ({ openMobileMenu, setOpenMobileMenu }) => {
  const navigate = useNavigate()

  const handleKeyDown = (event: KeyboardEvent<HTMLElement>) => {
    if (event.key === 'Enter' || event.key === ' ') {
      navigate('/log-in')
    }
  }
  return (
    <nav className="absolute mt-14 inset-0 h-screen bg-[#E5E5E5]/70 z-50 flex justify-end block md:hidden">
      <div className={`bg-white w-3/4 ${openMobileMenu ? 'animate-slideIn block' : 'animate-slideOut'}`}>
        <div className="flex w-full justify-between border-b border-gray-200 py-2 px-3">
          <img src="/logo.svg" alt="logo" className=" h-10 pr-6" />
          <button type="button" onClick={() => setOpenMobileMenu(false)}>
            <svg
              stroke="currentColor"
              fill="#9195a2"
              stroke-width="0"
              viewBox="0 0 24 24"
              className=" MobileMenu_menuClose__godty"
              height="25"
              width="25"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Close</title>
              <path fill="none" d="M0 0h24v24H0z" />
              <path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
            </svg>
          </button>
        </div>
        <div className="flex flex-col justify-between h-3/4">
          <ul className="py-4">
            <li className="flex justify-between items-center px-6 py-2 font-semibold">
              Video Tools
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 24 24"
                className="MobileMenu_chevron__n8qYl"
                height="20"
                width="20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Video Tools</title>
                <path fill="none" d="M0 0h24v24H0z" />
                <path d="M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
              </svg>
            </li>
            <li className="flex justify-between items-center px-6 py-2 font-semibold">
              AI Tools
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 24 24"
                className="MobileMenu_chevron__n8qYl"
                height="20"
                width="20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>AI Tools</title>
                <path fill="none" d="M0 0h24v24H0z" />
                <path d="M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
              </svg>
            </li>
            <li className="flex justify-between items-center px-6 py-2 font-semibold">
              Solutions
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 24 24"
                className="MobileMenu_chevron__n8qYl"
                height="20"
                width="20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Solutions</title>
                <path fill="none" d="M0 0h24v24H0z" />
                <path d="M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
              </svg>
            </li>
            <li className="flex justify-between items-center px-6 py-2 font-semibold">
              Learn
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 24 24"
                className="MobileMenu_chevron__n8qYl"
                height="20"
                width="20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Learn</title>
                <path fill="none" d="M0 0h24v24H0z" />
                <path d="M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
              </svg>
            </li>
            <li className="flex justify-between items-center px-6 py-2 font-semibold hover:underline">Pricing</li>
            <li className="flex justify-between items-center px-6 py-2 font-semibold hover:underline">Request a Demo</li>
            <li className="flex justify-between items-center px-6 py-2 font-semibold hover:underline">Sign In</li>
          </ul>
          <div className="flex flex-col justify-center">
            <button type="button" className="bg-[#18E1D6] p-4 text-[#31343E] font-semibold m-6 text-center rounded-md">
              Start Editing
            </button>
            <div className="text-center text-semibold">
              or,{' '}
              <strong onClick={() => navigate('/log-in')} onKeyDown={handleKeyDown} className="cursor-pointer">
                sign in
              </strong>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default MobileHeader
