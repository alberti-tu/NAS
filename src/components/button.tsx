'use client'

import Image from 'next/image'

import { useRouter } from 'next/navigation'
import { useTranslation } from 'react-i18next'

export type ButtonProps = {
  background?: string
  href?: string
  icon?: string,
  label?: string
}

const Button = ({ background, href, icon, label }: ButtonProps): JSX.Element => {
  const { t } = useTranslation()
  const router = useRouter()

  return (
    <button
      onClick={() => href && router.push(href)}
      style={{ background }}
    >
      {icon && (
        <Image
          src={`/icons/${icon}.png`}
          alt=""
          height={24}
          width={24}
        />
      )}
      {t(label)}
    </button>
  )
}

export default Button
