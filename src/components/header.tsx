'use client'

import * as React from 'react'

import Image from 'next/image'
import { useRouter } from 'next/navigation'

const Header = (): JSX.Element => {
  const router = useRouter()

  return (
    <div className="header">
      <Image
        className="button icon"
        src="/icons/settings.svg"
        alt=""
        height={24}
        width={24}
        onClick={() => router.push(`https://${location.hostname}:5001`)}
      />
    </div>
  )
}

export default Header
