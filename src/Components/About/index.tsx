import { LineVertical } from "@phosphor-icons/react"
import { TextRegular, TitleText } from "../typograph"
import { 
  ContainerAbout, 
  ContainerImage, 
  ContainerNumbersCompany, 
  ContentText, 
  DataCompanyOne, 
  Image 
} from "./styled"

export const About = () => {
  return (
    <ContainerAbout>
      <ContentText>
        <TextRegular color="blue-100">SOBRE NÓS</TextRegular>
        <TitleText size="xl" color="blue-500">
          Lorem ipsum dolor sit amet consectetur adipisicing 
        </TitleText>
        <TextRegular size="sm">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
          A rem distinctio officiis corrupti pariatur labore vero omnis, 
          natus sapiente deserunt explicabo quidem quia quod voluptas veritatis, 
          repellendus minima in reiciendis?
        </TextRegular>

        <ContainerNumbersCompany>
          <DataCompanyOne>
            <TitleText size="l" color="blue-100">11K+</TitleText>
            <TextRegular size="sm">Clientes Satisfeitos</TextRegular>
          </DataCompanyOne>

          <LineVertical size={52} weight="thin" />

          <DataCompanyOne>
            <TitleText size="l" color="blue-100">6K+</TitleText>
            <TextRegular size="sm">Receitas Cliadas</TextRegular>
          </DataCompanyOne>

          <LineVertical size={52} weight="thin" />
          
          <DataCompanyOne>
            <TitleText size="l" color="blue-100">11K+</TitleText>
            <TextRegular size="sm">Receitas Cliadas</TextRegular>
          </DataCompanyOne>
        </ContainerNumbersCompany>
      </ContentText>
      <ContainerImage>
      <Image 
           className="imgOne" src="https://fullkit.moxcreative.com/medicashop/wp-content/uploads/sites/17/2022/09/two-pharmacists-working-together-at-pharmacy.jpg" alt="" />
          <Image 
          className="imgTwo"
          src="https://fullkit.moxcreative.com/medicashop/wp-content/uploads/sites/17/2022/09/two-pharmacists-working-together-at-pharmacy.jpg" alt="" />
      </ContainerImage>
    </ContainerAbout>
  )
}
