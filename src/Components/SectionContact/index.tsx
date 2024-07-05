import { Envelope, WhatsappLogo } from "@phosphor-icons/react"
import { TextRegular, TitleText } from "../typograph"
import { 
  ContainerContact, 
  ContainerEmailAndWhatsapp, 
  ContentContact, 
  ContentForm, 
  ContentInfo, 
  ContentTitle, 
  Iframe, 
  Span, 
  TextArea 
} from "./styled"
import { Input } from "../Input"
import { Button } from "../Button"

export const SectionContact = () => {
  return (
    <ContainerContact>
      <ContentContact>
      <ContentInfo>
         <ContentTitle>
           <TextRegular size="sm" color="blue-100">
             CONTATO
           </TextRegular>
  
           <TitleText size="l">
             Entre em  contato conosco.
           </TitleText>
         </ContentTitle>

         <ContainerEmailAndWhatsapp>
           <Span>
             <Envelope size={32} />
           </Span>
           
           <div>
             <TitleText size="s">Email</TitleText>
             <a href="mailto:#">exemple@gmail.com</a>
           </div>
         </ContainerEmailAndWhatsapp>

         <ContainerEmailAndWhatsapp>
           <Span>
             <WhatsappLogo size={32} /> 
           </Span>
           
           <div>
             <TitleText size="s">Telefone / Whatsapp</TitleText>
            <a href="#" target="_blanc">(22) 22222-2222</a>
           </div>
         </ContainerEmailAndWhatsapp>

         <Iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3689.3571681482113!2d-41.77779202543693!3d-22.377888919181682!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x963063ddce4c61%3A0xc5f4ad390f2196bc!2sRua%20Dr.%20J%C3%BAlio%20Olivier%2C%20320%20-%20Centro%2C%20Maca%C3%A9%20-%20RJ%2C%2027913-162!5e0!3m2!1spt-BR!2sbr!4v1719794999495!5m2!1spt-BR!2sbr"
          loading="lazy"  
          />
       </ContentInfo>
  
        <ContentForm>
          <Input type="text" placeholder="Nome" />
          <Input type="text" placeholder="Email" />
          <Input type="tel" placeholder="Telefone" />
          <TextArea placeholder="Digite sua dúvida...." />
          <Button btnLarge={false} >Enviar</Button>
        </ContentForm>
      </ContentContact>
    </ContainerContact>
  )
}


