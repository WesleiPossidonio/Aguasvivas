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
