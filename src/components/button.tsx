'use client'

import Image from 'next/image'
import { useTranslation } from 'react-i18next'

export type ButtonProps = {
  background?: string
  href?: string
  icon?: string,
  label?: string
}

const Button = ({ background, href, icon, label }: ButtonProps): JSX.Element => {
  const { t } = useTranslation()

  return (
    <a href={href} className="button" style={{ background }}>
      {icon && (
        <Image
          src={icon}
          alt={icon}
          height={24}
          width={24}
        />
      )}
      {t(label)}
    </a>
  )
}

export default Button
