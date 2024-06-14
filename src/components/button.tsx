'use client'
/* eslint-disable @next/next/no-img-element */
import { useRouter } from 'next/navigation'

export type ButtonProps = {
  background?: string
  href?: string
  icon?: string,
  label?: string
}

const Button = ({ background, href, icon, label }: ButtonProps): JSX.Element => {
  const router = useRouter()
  return (
    <button
      onClick={() => href && router.push(href)}
      style={{ background }}
      
    >
      {icon && <img src={`/icons/${icon}.png`} alt="" />}
      {label}
    </button>
  )
}

export default Button
