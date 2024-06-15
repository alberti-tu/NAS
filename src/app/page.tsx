import Button, { ButtonProps } from '@/components/button'
import TranslateSelector from '@/components/translateSelector'
import PageContainer from '@/components/pageContainer'

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
    <PageContainer
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
