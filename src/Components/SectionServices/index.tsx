import { 
  Box, 
  BoxContent, 
  BoxLarge, 
  BoxServices, 
  ContainerBoxServices, 
  ContainerSectionService 
} from "./styled"
import ImageTest from '../../assets/imageServiceTwo.svg'
import ImageTest2 from '../../assets/ImageService.svg'
import ImageTestOne from '../../assets/imageOne.svg'
import ImageTestFour from '../../assets/imageFour.svg'
import { TextRegular, TitleText } from "../typograph"




export const SectionService = () => {
  return (
    <ContainerSectionService>
      <BoxServices>
        <TitleText>
          HOMEOPATIA E FLORAIS
        </TitleText>

        <TextRegular color="white">
           Cura natural o corpo e equilíbrio físico e mental
        </TextRegular>
        <img src={ImageTestOne} alt="" />
      </BoxServices>
      <ContainerBoxServices>
        <BoxContent>
           <Box colors="boxOne">
            <TitleText>MANIPULADOS</TitleText>
            <TextRegular color="white">
              Fórmulas manipuladas de acordo com suas necessidades
            </TextRegular>

            <img src={ImageTest} alt="" />
           </Box>


           <Box colors="boxTwo">
            <TitleText>
              SUPLEMENTOS
            </TitleText>
            <TextRegular color="white">
              Auxílio na reposição de nutrientes e aumento da performance física
            </TextRegular>
            <img src={ImageTest2} alt="" />
            
           </Box>
        </BoxContent>
        <BoxLarge>
          <TitleText>
            DERMOCOSMÉTICOS
          </TitleText>

          <TextRegular color="white">
            Cuidados gerais da pele
          </TextRegular>

          <img src={ImageTestFour} alt="" />
        </BoxLarge>
      </ContainerBoxServices>
    </ContainerSectionService>
  )
}


