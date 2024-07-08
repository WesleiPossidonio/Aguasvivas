import { useEffect } from "react";
import { Button } from "../Button"
import { TextRegular, TitleText } from "../typograph"
import { ContainerCallAction } from "./styled"
import AOS from 'aos'
import 'aos/dist/aos.css';

export const CallAction = () => {
  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <ContainerCallAction data-aos="zoom-in" data-aos-duration="1000">
      <TitleText color="white" size="xl">
      Transforme Seu Tratamento com Medicamentos Personalizados
      </TitleText>
      <TextRegular color="white">
      Obtenha medicamentos manipulados sob medida para suas necessidades. 
      Fale com nossos especialistas e descubra a solução ideal para sua saúde.
      </TextRegular>
      <Button btnLarge>Fazer Orçamento</Button>
    </ContainerCallAction>
  )
}


