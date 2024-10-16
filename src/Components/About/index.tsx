import { LineVertical } from "@phosphor-icons/react"
import { TextRegular, TitleText } from "../typograph"
import CountUp from 'react-countup';
import { 
  ContainerAbout, 
  ContainerImage, 
  ContainerNumbersCompany, 
  ContentText, 
  DataCompanyOne, 
  Image 
} from "./styled"

import AOS from 'aos'
import { useEffect } from "react";
import 'aos/dist/aos.css';

export const About = () => {

  useEffect(() => {
    AOS.init()
  }, [])
  
  return (
    <ContainerAbout id="about" >
      <ContentText data-aos="fade-right" data-aos-duration="1000">
        <TextRegular color="blue-100">SOBRE NÓS</TextRegular>
        <TitleText size="l" color="blue-500">
          Cuidado Personalizado <br /> para Sua Saúde
        </TitleText>
        <TextRegular size="sm">
          Na Aguaviva, nossa missão é proporcionar soluções de saúde 
          personalizadas através da manipulação de medicamentos. 
          Desenvolvemos fórmulas sob medida para atender às necessidades 
          únicas de cada paciente, garantindo produtos de alta 
          qualidade e eficácia.
        </TextRegular>

        <ContainerNumbersCompany>
          <DataCompanyOne>
            <TitleText color="blue-100">+{<CountUp end={1000} duration={3} decimal='4' />}</TitleText>
            <TextRegular size="sm">Clientes Satisfeitos</TextRegular>
          </DataCompanyOne>

          <LineVertical size={52} weight="thin" />

          <DataCompanyOne>
            <TitleText color="blue-100">+{<CountUp end={500} duration={3} />}</TitleText>
            <TextRegular size="sm">Receitas Cliadas</TextRegular>
          </DataCompanyOne>

          <LineVertical size={52} weight="thin" />
          
          <DataCompanyOne>
            <TitleText color="blue-100">+{<CountUp end={1500} duration={3} decimal='4' />}</TitleText>
            <TextRegular size="sm">Atendimentos Realizados</TextRegular>
          </DataCompanyOne>
        </ContainerNumbersCompany>
      </ContentText>
      <ContainerImage>
      <Image 
           className="imgOne" src="https://fullkit.moxcreative.com/medicashop/wp-content/uploads/sites/17/2022/09/two-pharmacists-working-together-at-pharmacy.jpg" alt="" data-aos="fade-up" data-aos-duration="1000"/>
          <Image 
          className="imgTwo"
          src="https://fullkit.moxcreative.com/medicashop/wp-content/uploads/sites/17/2022/09/two-pharmacists-working-together-at-pharmacy.jpg" alt="" data-aos="fade-down" data-aos-duration="1000"/>
      </ContainerImage>
    </ContainerAbout>
  )
}
