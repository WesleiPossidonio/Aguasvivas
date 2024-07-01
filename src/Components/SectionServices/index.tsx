import { Box, BoxContent, BoxLarge, BoxServices, ContainerBoxServices, ContainerSectionService } from "./styled"


export const SectionService = () => {
  return (
    <ContainerSectionService>
      <BoxServices></BoxServices>
      <ContainerBoxServices>
        <BoxContent>
           <Box colors="boxOne"></Box>
           <Box colors="boxTwo"></Box>
        </BoxContent>
        <BoxLarge></BoxLarge>
      </ContainerBoxServices>
    </ContainerSectionService>
  )
}


