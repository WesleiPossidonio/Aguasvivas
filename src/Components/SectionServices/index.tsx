import { useEffect } from 'react'
import ImageTest from '../../assets/imageServiceTwo.svg'
import ImageTest2 from '../../assets/ImageService.svg'
import ImageTestOne from '../../assets/imageOne.svg'
import ImageTestFour from '../../assets/imageFour.svg'
import { TextRegular, TitleText } from '../typograph'
import AOS from 'aos'
import 'aos/dist/aos.css'

import {
  Box,
  BoxContent,
  BoxLarge,
  BoxServices,
  ButtonServices,
  ContainerBoxServices,
  ContainerSectionService,
} from './styled'
import { useNavigate } from 'react-router-dom'

export const SectionService = () => {
  const navigate = useNavigate()

  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <ContainerSectionService id="produtos">
      <BoxServices data-aos="zoom-in" data-aos-duration="500" id="florais">
        <TitleText>HOMEOPATIA E FLORAIS</TitleText>

        <TextRegular color="white">
          Cura natural o corpo e equilíbrio físico e mental
        </TextRegular>

        <ButtonServices onClick={() => navigate('/homepatia-e-florais')}>
          Saiba Mais!
        </ButtonServices>
        <img src={ImageTestOne} alt="" />
      </BoxServices>

      <ContainerBoxServices>
        <BoxContent>
          <Box
            colors="boxOne"
            data-aos="zoom-in"
            data-aos-duration="1000"
            id="manipulados"
          >
            <TitleText>MANIPULADOS</TitleText>
            <TextRegular color="white">
              Fórmulas manipuladas de acordo com suas necessidades
            </TextRegular>
            <ButtonServices onClick={() => navigate('/manipulados')}>
              Saiba Mais!
            </ButtonServices>
            <img src={ImageTest} alt="" />
          </Box>

          <Box
            colors="boxTwo"
            data-aos="zoom-in"
            data-aos-duration="1500"
            id="suprementos"
          >
            <TitleText>SUPLEMENTOS</TitleText>
            <TextRegular color="white">
              Auxílio na reposição de nutrientes e aumento da performance física
            </TextRegular>
            <img src={ImageTest2} alt="" />
            <ButtonServices onClick={() => navigate('/suplementos')}>
              Saiba Mais!
            </ButtonServices>
          </Box>
        </BoxContent>

        <BoxLarge data-aos="zoom-in" data-aos-duration="1800">
          <TitleText>DERMOCOSMÉTICOS</TitleText>

          <TextRegular color="white">Cuidados gerais da pele</TextRegular>
          <ButtonServices onClick={() => navigate('/dermocosmeticos')}>
            Saiba Mais!
          </ButtonServices>

          <img src={ImageTestFour} alt="" />
        </BoxLarge>
      </ContainerBoxServices>
    </ContainerSectionService>
  )
}
