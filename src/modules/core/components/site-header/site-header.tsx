import React from 'react'
import * as NavigationMenu from '@radix-ui/react-navigation-menu'
import classNames from 'classnames'
import { CaretDownIcon } from '@radix-ui/react-icons'
import './styles.css'
import type { MobileHeaderProps } from '@/types'
import { menuNavItems } from './menu-nav-items'
import { useNavigate } from 'react-router-dom'
import type { KeyboardEvent } from 'react'

const MenuHeader: React.FC<MobileHeaderProps> = ({ setOpenMobileMenu }) => {
  const handleKeyDown = (event: KeyboardEvent<HTMLElement>) => {
    if (event.key === 'Enter' || event.key === ' ') {
      navigate('/log-in')
    }
  }
  const navigate = useNavigate()
  return (
    <NavigationMenu.Root className="NavigationMenuRoot">
      <img src="/logo.svg" alt="logo" className="md:hidden block h-10 pr-6" />
      <div className="hidden md:block">
        <NavigationMenu.List className="NavigationMenuList">
          <img src="/logo.svg" alt="logo" className=" h-10 pr-6" />
          <NavigationMenu.Item>
            <NavigationMenu.Trigger className="NavigationMenuTrigger">
              Tools <CaretDownIcon className="CaretDown" aria-hidden />
            </NavigationMenu.Trigger>
            <NavigationMenu.Content className="NavigationMenuContent">
              <ul className="List one">
                <li className="grid grid-cols-1 grid-rows-2" style={{ gridRow: 'span 3' }}>
                  <NavigationMenu.Link asChild>
                    <a className="Callout group" href="/">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 24 24"
                        height="2em"
                        width="2em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title>Video Editor</title>
                        <path fill="none" d="M0 0h24v24H0z" />
                        <path d="M6 15h6v2H6zM12 7h6v2h-6zM9 11h6v2H9z" />
                        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z" />
                      </svg>
                      <div className="CalloutHeading group-hover:text-[#0083E2]">Video Editor</div>
                      <p className="CalloutText">Edit video clips, combine tracks together, and add effect all in one place</p>
                    </a>
                  </NavigationMenu.Link>
                  <div className="grid grid-rows-2">
                    {menuNavItems[0].subItems?.slice(0, 2).map((subItem) => (
                      <ListItem key={subItem.title} title={subItem.title}>
                        {subItem.text}
                      </ListItem>
                    ))}
                  </div>
                </li>
                <li className="grid grid-cols-1 grid-rows-4">
                  {menuNavItems[0].subItems?.slice(2, 6).map((subItem) => (
                    <ListItem key={subItem.title} title={subItem.title}>
                      {subItem.text}
                    </ListItem>
                  ))}
                </li>
                <li className="grid grid-cols-1 grid-rows-4">
                  {menuNavItems[0].subItems?.slice(6).map((subItem) => (
                    <ListItem key={subItem.title} title={subItem.title}>
                      {subItem.text}
                    </ListItem>
                  ))}
                </li>
              </ul>
            </NavigationMenu.Content>
          </NavigationMenu.Item>

          <NavigationMenu.Item>
            <NavigationMenu.Trigger className="NavigationMenuTrigger bg-">
              AI <CaretDownIcon className="CaretDown" aria-hidden />
            </NavigationMenu.Trigger>
            <NavigationMenu.Content className="NavigationMenuContent">
              <ul className="List one">
                <li className="grid grid-cols-1 grid-rows-2" style={{ gridRow: 'span 3' }}>
                  <NavigationMenu.Link asChild>
                    <a className="Callout group" href="/">
                      <svg
                        stroke="currentColor"
                        fill="none"
                        stroke-width="2"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                        height="2em"
                        width="2em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title>Kapwing AI</title>
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                        />
                      </svg>
                      <div className="CalloutHeading group-hover:text-[#0083E2]">Kapwing AI</div>
                      <p className="CalloutText">Discover all of Kapwing's AI-powered tools</p>
                    </a>
                  </NavigationMenu.Link>
                  <div className="grid grid-rows-2">
                    {menuNavItems[1].subItems?.slice(0, 2).map((subItem) => (
                      <ListItem key={subItem.title} title={subItem.title}>
                        {subItem.text}
                      </ListItem>
                    ))}
                  </div>
                </li>
                <li className="grid grid-cols-1 grid-rows-4">
                  {menuNavItems[1].subItems?.slice(2, 6).map((subItem) => (
                    <ListItem key={subItem.title} title={subItem.title}>
                      {subItem.text}
                    </ListItem>
                  ))}
                </li>
                <li className="grid grid-cols-1 grid-rows-4">
                  {menuNavItems[1].subItems?.slice(6).map((subItem) => (
                    <ListItem key={subItem.title} title={subItem.title}>
                      {subItem.text}
                    </ListItem>
                  ))}
                </li>
              </ul>
            </NavigationMenu.Content>
          </NavigationMenu.Item>

          <NavigationMenu.Item>
            <NavigationMenu.Trigger className="NavigationMenuTrigger">
              Solutions <CaretDownIcon className="CaretDown" aria-hidden />
            </NavigationMenu.Trigger>
            <NavigationMenu.Content className="NavigationMenuContent">
              <ul className="List two">
                {menuNavItems[2].subItems?.map((subItem) => (
                  <ListItem key={subItem.title} title={subItem.title}>
                    {subItem.text}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenu.Content>
          </NavigationMenu.Item>

          <NavigationMenu.Item>
            <NavigationMenu.Trigger className="NavigationMenuTrigger">
              Learn <CaretDownIcon className="CaretDown" aria-hidden />
            </NavigationMenu.Trigger>
            <NavigationMenu.Content className="NavigationMenuContent">
              <ul className="List one">
                <li className="grid grid-cols-1 grid-rows-1" style={{ gridRow: 'span 3' }}>
                  <NavigationMenu.Link asChild>
                    <a className="Callout group" href="/">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 24 24"
                        className="HeaderBarLinks_featuredIcon__riRB7"
                        height="2em"
                        width="2em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title>Resources</title>
                        <path fill="none" d="M0 0h24v24H0z" />
                        <path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z" />
                        <path d="M14 17H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
                      </svg>
                      <div className="CalloutHeading group-hover:text-[#0083E2]">Resources</div>
                      <p className="CalloutText">Articles and guides to help you create more</p>
                    </a>
                  </NavigationMenu.Link>
                  <div className="grid grid-rows-1">
                    {menuNavItems[3].subItems?.slice(0, 1).map((subItem) => (
                      <ListItem key={subItem.title} title={subItem.title}>
                        {subItem.text}
                      </ListItem>
                    ))}
                  </div>
                </li>
                <li className="grid grid-cols-1 grid-rows-3">
                  {menuNavItems[3].subItems?.slice(1, 4).map((subItem) => (
                    <ListItem key={subItem.title} title={subItem.title}>
                      {subItem.text}
                    </ListItem>
                  ))}
                </li>
                <li className="grid grid-cols-1 grid-rows-3">
                  {menuNavItems[3].subItems?.slice(4).map((subItem) => (
                    <ListItem key={subItem.title} title={subItem.title}>
                      {subItem.text}
                    </ListItem>
                  ))}
                </li>
              </ul>
            </NavigationMenu.Content>
          </NavigationMenu.Item>

          <NavigationMenu.Item>
            <NavigationMenu.Link className="NavigationMenuLink" href="">
              Pricing
            </NavigationMenu.Link>
          </NavigationMenu.Item>

          <NavigationMenu.Indicator className="NavigationMenuIndicator">
            <div className="Arrow" />
          </NavigationMenu.Indicator>
        </NavigationMenu.List>
      </div>

      <div className="ViewportPosition">
        <NavigationMenu.Viewport className="NavigationMenuViewport" />
      </div>

      <div className="flex justify-center items-center">
        <ul className="flex justify-center items-center font-semibold text-sm">
          <li className="hover:text-[#0083E2] cursor-pointer hidden lg:block">
            Request a Demo<span className="text-xl pl-6">|</span>
          </li>

          <li onClick={() => navigate('/log-in')} onKeyPress={handleKeyDown} className="hover:text-[#0083E2] cursor-pointer px-6">
            Sign In
          </li>

          <li
            onClick={() => setOpenMobileMenu(true)}
            onKeyPress={(event) => {
              if (event.key === 'Enter') {
                setOpenMobileMenu(true)
              }
            }}
            className="block md:hidden"
          >
            <svg
              stroke="currentColor"
              fill="#9195a2"
              stroke-width="0"
              viewBox="0 0 448 512"
              className="HeaderBar_menuIcon___qIiT mr-6"
              height="25"
              width="25"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z" />
            </svg>
          </li>

          <li className="mr-3 px-3 py-2 bg-white rounded-sm border border-gray-300 hover:bg-[#FAFAFA] cursor-pointer hidden xl:block">
            Try Kapwing Free
          </li>
        </ul>
      </div>
    </NavigationMenu.Root>
  )
}

interface ListItemProps {
  className?: string
  title: string
  children?: React.ReactNode
  href?: string
}

const ListItem: React.FC<ListItemProps> = React.forwardRef(({ className, children, title, ...props }) => (
  <li>
    <NavigationMenu.Link asChild>
      <a className={classNames('ListItemLink group', className)} {...props}>
        <div className="ListItemHeading group-hover:text-[#0083E2]">{title}</div>
        <p className="ListItemText">{children}</p>
      </a>
    </NavigationMenu.Link>
  </li>
))

export default MenuHeader
