import { TextRegular, TitleText } from '../typograph'
import { useEffect } from 'react'
import {
  BoxAdjectives,
  BoxText,
  ContainerAdjectivesApp,
  ContainerSectionApp,
  ContentAdjectives,
  ContentTextApp,
  ImgApp,
} from './styled'
import ImageApp from '../../assets/mobileImg.svg'
import {
  DeviceMobile,
  DeviceTabletSpeaker,
  Headset,
} from '@phosphor-icons/react'
import { Button } from '../Button'
import AOS from 'aos'
import 'aos/dist/aos.css'

export const SectionApp = () => {
  useEffect(() => {
    AOS.init()
  }, [])
  return (
    <ContainerSectionApp>
      <ContentTextApp>
        <TextRegular color="blue-100">NOSSO APP</TextRegular>
        <TitleText size="l">A Aguaviva na palma da sua mão.</TitleText>
        <TextRegular size="s">
          Basta baixar o aplicativo para celular e solicitar o orçamento, envie
          a qualquer hora do dia ou da noite envie seus dados e fotografe a sua
          receita.
        </TextRegular>

        <div>
          <Button btnLarge={false}>Baixar Agora!</Button>
        </div>

        <ContainerAdjectivesApp>
          <ImgApp src={ImageApp} />

          <ContentAdjectives>
            <BoxAdjectives data-aos="zoom-in" data-aos-duration="1000">
              <DeviceMobile size={35} color="#15A4C4" />
              <BoxText>
                <TitleText> Facilidade & Comodidade</TitleText>
                <TextRegular size="sm">
                  Tenha medicamentos personalizados e consultas rápidas no app
                  da Aguaviva
                </TextRegular>
              </BoxText>
            </BoxAdjectives>

            <BoxAdjectives data-aos="zoom-in" data-aos-duration="1000">
              <Headset size={35} color="#15A4C4" />
              <BoxText>
                <TitleText>Praticidade & Eficiência</TitleText>
                <TextRegular size="sm">
                  Descubra como é fácil encomendar medicamentos e agendar
                  consultas no app
                </TextRegular>
              </BoxText>
            </BoxAdjectives>

            <BoxAdjectives data-aos="zoom-in" data-aos-duration="1000">
              <DeviceTabletSpeaker size={35} color="#15A4C4" />
              <BoxText>
                <TitleText>Simplicidade & Conveniência</TitleText>
                <TextRegular size="sm">
                  Solicite medicamentos sob medida e marque consultas
                  instantaneamente
                </TextRegular>
              </BoxText>
            </BoxAdjectives>
          </ContentAdjectives>
        </ContainerAdjectivesApp>
      </ContentTextApp>
    </ContainerSectionApp>
  )
}
