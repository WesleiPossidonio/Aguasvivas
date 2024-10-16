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

import Img from '../../assets/suplementos.jpg'

export const Suplementos = () => {
  return (
    <Container>
      <BannerServices nameServices="Suplementos" />

      <ContainerProducts>
        <ContentText>
          <TitleText color="blue-100" size="s">
            - Suplementos
          </TitleText>
          <TitleText color="text" size="l">
            Suplementação <br /> para Esporte e Bem-Estar
          </TitleText>

          <TextRegular>
            Na Aguaviva, <strong> levamos a suplementação a sério, </strong>{' '}
            sempre pensando em quem busca inovação, seja no esporte ou no
            bem-estar diário.
            <br />
            <br />
            Se você é atleta ou pratica esportes, nossos suplementos são
            perfeitos para turbinar seus treinos!{' '}
            <strong>
              {' '}
              Ajudam a aumentar a massa muscular, cuidar das articulações, e
              muito mais.{' '}
            </strong>{' '}
            <br />
            <br />
            Em cada fase, o corpo pede uma atenção especial. Nossos suplementos
            são feitos para complementar a dieta,{' '}
            <strong>
              {' '}
              trazendo vitaminas, minerais, aminoácidos, fibras e tudo que você
              precisa para se sentir bem!{' '}
            </strong>{' '}
            <br />
            <br />
            Nosso laboratório é projetado para garantir que cada suplemento seja
            <strong>
              {' '}
              produzido com total segurança, sem contaminação cruzada,{' '}
            </strong>
            para que você possa confiar de olhos fechados.
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
