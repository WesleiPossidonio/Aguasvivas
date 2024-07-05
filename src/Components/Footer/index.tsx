import { Envelope, MapPin, WhatsappLogo } from "@phosphor-icons/react"
import { TextRegular, TitleText } from "../typograph"
import { ContainerFooter, ContentLinks, LinkSite, TitleLinks } from "./styled"

export const Footer = () => {
  return (
    <ContainerFooter>
      <ContentLinks>
        <TitleText color="white">Logo</TitleText>
        <TextRegular color="white">AguaViva © 2017 - Todos os direitos reservados. 
          <br /> CNPJ: 39.692.645/0001-78
        </TextRegular>
      </ContentLinks>

      <ContentLinks>
        <TitleText color="white">
          Mapa do Site
        </TitleText>
        <LinkSite>
          <TextRegular color="white">Home</TextRegular>
          <TextRegular color="white">Sobre Nós</TextRegular>
          <TextRegular color="white">Nossos Produtos</TextRegular>
          <TextRegular color="white">Lojas</TextRegular>
          <TextRegular color="white">Contatos</TextRegular>
        </LinkSite>
      </ContentLinks>

      <ContentLinks>
        <TitleText color="white">
          Contatos
        </TitleText>

        <TitleLinks>
           <WhatsappLogo size={31} color="#fff" />
           <div>
              <TextRegular weight={600}>Whatsapp</TextRegular>
              <TextRegular size="sm" color="white">
                 (22) 99609-2525
              </TextRegular>
           </div>
        </TitleLinks>

        <TitleLinks>
           <Envelope size={31} color="#fff" />
           <div>
              <TextRegular weight={600}>Email</TextRegular>
              <TextRegular size="sm" color="white">
                 orcamento@farmaciaaguaviva.com
              </TextRegular>
           </div>
        </TitleLinks>
        
        <TitleLinks>
           <MapPin size={31} color="#fff" />
           <div>
              <TextRegular weight={600}>Matrix Macaé</TextRegular>
              <TextRegular size="sm" color="white">Rua Dr Julio Olivier, 320</TextRegular>
              <TextRegular size="sm" color="white">
                <strong> 
                  Farmacêutico Responsável Técnico: 
                </strong> Leandro Gomes CRF 8967/RJ 
              </TextRegular>
              <TextRegular size="sm" color="white">
                <strong> 
                Licença sanitária: 
                </strong> 301.077/2022 / AFE: 0134853 / AE: 1347052
              </TextRegular>
           </div>
        </TitleLinks>

      </ContentLinks>
    </ContainerFooter>
  )
}


