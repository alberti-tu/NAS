import Button, { ButtonProps } from '@/components/button'
import Header from '@/components/header'
import LanguageSelector from '@/components/languageSelector'

const butttons: ButtonProps[] = [
  {
    background: '#f0b038',
    href: 'files',
    icon: '/icons/files.png',
    label: 'pages.files'
  },
  {
    background: '#ff6f61',
    href: 'photos',
    icon: '/icons/photos.png',
    label: 'pages.photos'
  },
  {
    background: '#D13B3B',
    href: 'video',
    icon: '/icons/video.png',
    label: 'pages.video'
  },
  {
    background: '#00BEAE',
    href: 'audio',
    icon: '/icons/audio.png',
    label: 'pages.audio'
  }
]

const HomePage = (): JSX.Element => {
  return (
    <div className="page">
      <Header />
      <div className="background-image" style={{ backgroundImage: 'url(/background.jpg)' }}>
        <div className="button-group">
          {butttons.map((item, index) => <Button key={index} {...item} />)}
        </div>
      </div>
      <LanguageSelector />
    </div>
  )
}

export default HomePage
