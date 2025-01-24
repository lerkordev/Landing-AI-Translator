import AuthBG from '@/assets/background_login.webp'
import AuthIllustration from '@/assets/sign-in-illustration.webp'
import { Arrow } from '@/modules/core/icons'
import { ButtonVariants } from '@/modules/core/ui/button'
import { cn } from '@/modules/core/utils'
import { Routes } from '@/routes'
import { Link, Outlet } from 'react-router-dom'

export default function AuthLayout() {
  return (
    <div
      className="h-screen"
      style={{
        backgroundImage: `url(${AuthBG})`,
        backgroundPosition: '0 0%',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="grid h-full grid-cols-1 overflow-auto py-14">
        <div className="flex flex-col gap-6 lg:flex-row items-center w-full">
          {/* <div className="w-full mb-4">
            <Link className={cn(ButtonVariants(), 'block w-fit')} to={Routes.home}>
              <Arrow direction="left" />
            </Link>
          </div> */}
          <div className="xl:w-1/2 xl:flex lg:w-1/2 md:flex md:justify-end">
            {/* <header className="mb-8 text-center">
              <h1 className="text-5xl font-bold text-primary">LOGO</h1>
            </header> */}
            <Outlet />
          </div>
          <div className="flex justify-center items-center xl:justify-start lg:w-1/2">
            <img src={AuthIllustration} alt="AuthIllustration" className="items-center w-1/2 lg:w-3/4" />
          </div>
        </div>
      </div>
    </div>
  )
}
