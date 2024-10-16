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

import Img from '../../assets/dermocosmeticos.jpg'

export const Dermocosmeticos = () => {
  return (
    <Container>
      <BannerServices nameServices="Dermocosméticos" />

      <ContainerProducts>
        <ContentText>
          <TitleText color="blue-100" size="s">
            - Dermocosméticos
          </TitleText>
          <TitleText color="text" size="l">
            Cuidados Especiais para Pele, Cabelos e Unhas
          </TitleText>

          <TextRegular>
            Na Aguaviva, oferecemos uma <strong> ampla variedade de ativos 
            dermatologicamente eficazes </strong> para quem busca <strong> cuidar da pele, cabelos
            e unhas com qualidade. </strong><br />
            <br />
            Utilizamos apenas <strong> bases cosméticas consagradas, com laudos
            microbiológicos e alta padronização, </strong> garantindo segurança e
            eficácia. <br />
            <br />
            Nossas formulações são adaptadas às suas necessidades:
            <strong> hipoalergênicas, livres de parabenos, sem conservantes, não
            comedogênicas, </strong> com ou sem essências, corantes e sal, entre outras
            opções personalizadas.
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
