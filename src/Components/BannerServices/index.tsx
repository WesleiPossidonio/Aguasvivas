import { ContainerBannerService, ContentLinks } from './styled'
import { TextRegular, TitleText } from '../typograph'

interface BannerServicesProps {
  nameServices: string
  loja?: boolean
}

export const BannerServices = ({ nameServices, loja }: BannerServicesProps) => {
  return (
    <ContainerBannerService>
      <TitleText color="white" size="xl">
        {nameServices}
      </TitleText>

      {loja ? (
        <ContentLinks>
          <TextRegular color="white" weight={500}>
            Home
          </TextRegular>{' '}
          |
          <TextRegular color="white" weight={600}>
            {nameServices}
          </TextRegular>
        </ContentLinks>
      ) : (
        <ContentLinks>
          <TextRegular color="white" weight={500}>
            Home
          </TextRegular>{' '}
          |
          <TextRegular color="white" weight={500}>
            Nossos Produtos
          </TextRegular>{' '}
          |
          <TextRegular color="white" weight={600}>
            {nameServices}
          </TextRegular>
        </ContentLinks>
      )}
    </ContainerBannerService>
  )
}
