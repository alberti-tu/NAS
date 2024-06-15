'use client'

import Image from 'next/image'

type ToolbarButton = {
  href?: string
  icon?: string
}

const toolbarButtons : ToolbarButton[] = [
  { href: '/phpmyadmin', icon: '/icons/database.svg' },
  { href: `https://${location.hostname}:5001`, icon: '/icons/settings.svg' }
]

const Header = (): JSX.Element => {
  return (
    <div className="header">
      {toolbarButtons.map((item, index) => (
        <a key={index} href={item?.href}>
          <Image
            className="button icon"
            src={item?.icon}
            alt={item?.icon}
            height={24}
            width={24}
          />
        </a>
      ))}
    </div>
  )
}

export default Header
