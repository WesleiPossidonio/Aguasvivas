import { TextRegular, TitleText } from "../typograph"
import { BoxAdjectives, BoxText, ContainerAdjectivesApp, ContainerSectionApp, ContentAdjectives, ContentTextApp, ImgApp } from "./styled"
import ImageApp from '../../assets/mobileImg.svg'
import { DeviceMobile, DeviceTabletSpeaker, Headset, Heart } from "@phosphor-icons/react"
import { Button } from "../Button"


export const SectionApp = () => {
  return (
    <ContainerSectionApp>
      <ContentTextApp>
        <TextRegular color="blue-100">NOSSO APP</TextRegular>
        <TitleText size="l">A Aguaviva na palma da sua mão.</TitleText>
        <TextRegular size="s">
          Basta baixar o aplicativo para celular e solicitar o orçamento, 
          envie a qualquer hora do dia ou da noite envie seus dados e 
          fotografe a sua receita.
        </TextRegular>

        <div>
          <Button btnLarge={false}>Baixar Agora!</Button>
        </div>

        <ContainerAdjectivesApp>
          <ImgApp src={ImageApp} />

          <ContentAdjectives>
            <BoxAdjectives>
            <DeviceMobile size={35} color="#15A4C4" />
              <BoxText>
                <TitleText>Rapidez &</TitleText>
                <TextRegular size="sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim nulla soluta sint qua</TextRegular>
              </BoxText>
            </BoxAdjectives>

            <BoxAdjectives>
              <Headset size={35} color="#15A4C4"/>
              <BoxText>
                <TitleText>Rapidez &</TitleText>
                <TextRegular size="sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim nulla soluta sint qua</TextRegular>
              </BoxText>
            </BoxAdjectives>

            <BoxAdjectives>
              <DeviceTabletSpeaker size={35} color="#15A4C4"/>
              <BoxText>
                <TitleText>Rapidez &</TitleText>
                <TextRegular size="sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim nulla soluta sint qua</TextRegular>
              </BoxText>
            </BoxAdjectives>
          </ContentAdjectives>
          
        </ContainerAdjectivesApp>

      </ContentTextApp>
    </ContainerSectionApp>
  )
}


