import { Button } from "../Button"
import { TextRegular, TitleText } from "../typograph"
import { ContainerCallAction } from "./styled"

export const CallAction = () => {
  return (
    <ContainerCallAction>
      <TitleText color="white" size="xl">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem soluta
      </TitleText>
      <TextRegular color="white">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
        Eius rerum neque laborum dolore officiis est unde reprehenderit ipsum 
        fugiat inventore, nam magnam temporibus quaerat aspernatur
      </TextRegular>
      <Button btnLarge>Fazer Orçamento</Button>
    </ContainerCallAction>
  )
}


