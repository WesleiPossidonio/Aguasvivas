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

import Img from '../../assets/manipulados.jpg'

export const Manipulados = () => {
  return (
    <Container>
      <BannerServices nameServices="Manipulados" />

      <ContainerProducts>
        <ContentText>
          <TitleText color="blue-100" size="s">
            - Medicamentos Manipulados
          </TitleText>
          <TitleText color="text" size="l">
            Personalização e Qualidade Sob Medida
          </TitleText>

          <TextRegular size="s" weight={500}>
            Na farmácia Aguaviva, <strong> os medicamentos manipulados são desenvolvidos
            de forma personalizada, </strong> seguindo exatamente a prescrição médica e as
            necessidades únicas de cada paciente. <br /> <br />
            Com a manipulação, você tem acesso a doses exclusivas e <strong> combinações
            de ativos que não se encontram na indústria farmacêutica, </strong> trazendo
            mais benefícios e, em alguns casos, economia. <br />
            <br />
            Oferecemos <strong> diversas formas de medicamentos </strong> que tornam o tratamento
            mais agradável e fácil de seguir, <strong> como gomas, chás, chocolates,
            filmes orodispersíveis, entre outros.</strong>
            <br /><br />
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
