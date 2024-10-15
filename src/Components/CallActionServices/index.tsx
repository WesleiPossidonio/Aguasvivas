import { Button } from '../Button'
import { TextRegular, TitleText } from '../typograph'
import { ContainerCalAction, ContentCallAction } from './styled'

export const CallActionServices = () => {
  return (
    <ContainerCalAction>
      <ContentCallAction>
        <TitleText color="white" size="xl">
          Transforme Seu Tratamento com Medicamentos Personalizados
        </TitleText>
        <TextRegular color="white">
          Obtenha medicamentos manipulados sob medida para suas necessidades.
          Fale com nossos especialistas e descubra a solução ideal para sua
          saúde.
        </TextRegular>
        <Button btnLarge>Fazer Orçamento</Button>
      </ContentCallAction>
    </ContainerCalAction>
  )
}
