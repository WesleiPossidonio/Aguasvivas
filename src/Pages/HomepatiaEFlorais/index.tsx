import { 
  BannerServices, 
  TextRegular, 
  TitleText, 
  ImagePages, 
  Button, 
  SectionContact, 
  Footer, 
  CallActionServices 
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
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </TitleText>

          <TextRegular>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
            accusantium itaque totam repudiandae ducimus earum in dolore error
            molestias, cum iste aperiam facere facilis necessitatibus at numquam
            veniam voluptas excepturi. <br /><br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
            accusantium itaque totam repudiandae ducimus earum in dolore error
            molestias, cum iste aperiam facere facilis necessitatibus at numquam
            veniam voluptas excepturi.
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
