import {
  BannerServices,
  TextRegular,
  TitleText,
  ImagePages,
  Button,
  SectionContact,
  Footer,
  CallActionServices,
} from '../../Components'
import { Container, ContainerProducts, ContentText } from './styled'

import Img from '../../assets/homeopatia.jpg'

export const HomepratiaEFlorais = () => {
  return (
    <Container>
      <BannerServices nameServices="Homepratia e Florais" />

      <ContainerProducts>
        <ContentText>
          <TitleText color="blue-100" size="s">
            - Homepratia e Florais
          </TitleText>
          <TitleText color="text" size="l">
            Soluções Naturais
          </TitleText>

          <TextRegular>
            Na Aguaviva,{' '}
            <strong>
              {' '}
              contamos com um laboratório exclusivo para homeopatia e florais,
            </strong>{' '}
            operado por profissionais treinados e supervisionados por
            farmacêuticos especializados. <br />
            <br />A homeopatia{' '}
            <strong>
              {' '}
              promove a cura natural do corpo, ajudando o paciente a restaurar a
              saúde de forma suave.{' '}
            </strong>{' '}
            Já os florais{' '}
            <strong> trazem equilíbrio ao corpo e à mente, </strong> sendo
            ideais para quem busca bem-estar de forma natural e para toda a
            família.
          </TextRegular>

          <Button btnLarge={false}>Saiba Mais!</Button>
        </ContentText>
        <ImagePages linkImg={Img} />
      </ContainerProducts>

      <CallActionServices />
      <SectionContact />
      <Footer />
    </Container>
  )
}
