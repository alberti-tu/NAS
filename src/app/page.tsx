import * as React from 'react'

import Button, { ButtonProps } from '@/components/button'
import Footer from '@/components/footer'
import TranslateSelector from '@/components/translateSelector'

const butttons: ButtonProps[] = [
  {
    background: '#f0b038',
    href: 'files',
    icon: 'files',
    label: 'pages.files'
  },
  {
    background: '#ff6f61',
    href: 'photos',
    icon: 'photos',
    label: 'pages.photos'
  },
  {
    background: '#D13B3B',
    href: 'video',
    icon: 'video',
    label: 'pages.video'
  },
  {
    background: '#00BEAE',
    href: 'audio',
    icon: 'audio',
    label: 'pages.audio'
  }
]

const HomePage = (): JSX.Element => {
  return (
    <div className="page">
      <div className="background-image" style={{ backgroundImage: 'url(/background.jpg)' }}>
        <div className="button-group">
          {butttons.map((item, index) => <Button key={index} {...item} />)}
        </div>
      </div>
      <Footer>
        <TranslateSelector />
      </Footer>
    </div>
  )
}

export default HomePage
