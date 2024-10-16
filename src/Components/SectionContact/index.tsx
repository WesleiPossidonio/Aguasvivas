import { useEffect } from 'react'
import { TextRegular, TitleText } from '../typograph'
import {
  ContainerContact,
  ContainerEmailAndWhatsapp,
  ContentContact,
  ContentEmailAndWhatsapp,
  ContentForm,
  ContentInfo,
  ContentTitle,
  TextArea,
} from './styled'
import { Input } from '../Input'
import { Button } from '../Button'
import { MapPinArea, Phone, Envelope } from '@phosphor-icons/react'

import AOS from 'aos'
import 'aos/dist/aos.css'

export const SectionContact = () => {
  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <ContainerContact id="contato">
      <ContentContact data-aos="zoom-in" data-aos-duration="1000">
        <ContentTitle>
          <TextRegular size="sm" color="blue-100">
            CONTATO
          </TextRegular>

          <TitleText size="l">Entre em contato conosco.</TitleText>
        </ContentTitle>

        <ContentInfo>
          <ContainerEmailAndWhatsapp>
            <ContentEmailAndWhatsapp>
              <TitleText size="s">
                {' '}
                <MapPinArea size={35} color="#6CB8D8" /> Endereços
              </TitleText>
              
              <div>
                <TextRegular>
                  <strong>Macaé:</strong>{' '}
                  <a href=""> Rua Dr Julio Olivier, 320, Centro, Macaé/RJ </a>
                </TextRegular>

                <TextRegular>
                  <strong>Cabo Frio:</strong>{' '}
                  <a href=""> Rua Raul Veiga, 60, Centro, Cabo Frio/RJ </a>
                </TextRegular>
              </div>
            </ContentEmailAndWhatsapp>

            <ContentEmailAndWhatsapp>
              <TitleText size="s">
                <Phone size={35} color="#6CB8D8" />
                Telefones
              </TitleText>

              <div>
                <TextRegular>
                  <strong>Macaé:</strong>{' '}
                  <a href="tel:+552227626481">(22) 2762-6481</a> /{' '}
                  <a href="tel:+55222762-925">(22) 2762-2925</a>
                </TextRegular>

                <TextRegular>
                  <strong>Cabo Frio:</strong>{' '}
                  <a href="tel:+552227626481">(22) 2762-6481</a> /{' '}
                  <a href="tel:+55222762-925">(22) 2762-2925</a>
                </TextRegular>
              </div>
            </ContentEmailAndWhatsapp>

            <ContentEmailAndWhatsapp>
              <TitleText size="s">
                <Envelope size={35} color="#6CB8D8" />
                E-mail
              </TitleText>

              <div>
                <TextRegular>
                  <strong>Macaé:</strong>{' '}
                  <a href="mailto:orcamento@farmaciaaguaviva.com">
                    orcamento@farmaciaaguaviva.com
                  </a>
                </TextRegular>

                <TextRegular>
                  <strong>Cabo Frio:</strong>{' '}
                  <a href="mailto:aguavivacf@farmaciaaguaviva.com">
                    aguavivacf@farmaciaaguaviva.com
                  </a>
                </TextRegular>
              </div>
            </ContentEmailAndWhatsapp>
          </ContainerEmailAndWhatsapp>

          <ContentForm>
            <Input type="text" placeholder="Nome" />
            <Input type="text" placeholder="Email" />
            <Input type="tel" placeholder="Telefone" />
            <TextArea placeholder="Digite sua dúvida...." />
            <Button btnLarge={false}>Enviar</Button>
          </ContentForm>
        </ContentInfo>
      </ContentContact>
    </ContainerContact>
  )
}
