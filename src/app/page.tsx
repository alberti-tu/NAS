import Button, { ButtonProps } from '@/components/button'
import Header from '@/components/header'
import PageContainer from '@/components/pageContainer'
import TranslateSelector from '@/components/translateSelector'

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
    <PageContainer
      header={<Header />}
      footer={<TranslateSelector />}
    >
      <div className="background-image" style={{ backgroundImage: 'url(/background.jpg)' }}>
        <div className="button-group">
          {butttons.map((item, index) => <Button key={index} {...item} />)}
        </div>
      </div>
    </PageContainer>
  )
}

export default HomePage
