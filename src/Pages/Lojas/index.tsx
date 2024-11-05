import {
  BannerServices,
  TextRegular,
  TitleText,
  Footer,
  CallAction,
} from '../../Components'
import {
  Container,
  ContainerIcon,
  ContainerInfo,
  ContainerInfoContacts,
  ContainerInfoDoctor,
  ContenTextInfo,
  ContentInfoContacts,
} from './styled'

import { ClipboardText, MapPinArea, PhoneList } from '@phosphor-icons/react'

export const LOjas = () => {
  return (
    <Container>
      <BannerServices loja nameServices="Nossas Lojas" />

      <ContainerInfoContacts>
        <ContentInfoContacts>
          <TitleText color="blue-100" size="s">
            - Macaé RJ
          </TitleText>
          <TitleText color="text" size="l">
            Nossa localização e Horários em Macaé RJ
          </TitleText>

          <TextRegular>
            CNPJ 39.692.645/0001-78 Farmácia Agua Viva de Macaé Ltda
          </TextRegular>

          <ContainerInfo>
            <ContainerIcon>
              <MapPinArea size={45} color="#fff" />
            </ContainerIcon>
            <ContenTextInfo>
              <TextRegular>
                <strong>Endereço:</strong> Rua Dr Julio Olivier, 320, Centro,
                Macaé/RJ. CEP 27913-162. Telefone: 22-27626481
              </TextRegular>
              <TextRegular>
                <strong>Horário de Funcionamento:</strong> segunda a sexta:
                8h00-18h00 / sábado: 8h30-12h30
              </TextRegular>
            </ContenTextInfo>
          </ContainerInfo>

          <ContainerInfoDoctor>
            <ContainerIcon>
              <ClipboardText size={45} color="#fff" />
            </ContainerIcon>

            <ContenTextInfo>
              <TextRegular>
                <strong>Farmacêutico Responsável Técnico:</strong> Leandro Gomes
                CRF 8967/RJ
              </TextRegular>

              <TextRegular>
                <strong>Licença sanitária:</strong> 301.077/2022 / AFE: 0134853
                / AE: 1347052
              </TextRegular>
            </ContenTextInfo>
          </ContainerInfoDoctor>

          <ContainerInfo>
            <ContainerIcon>
              <PhoneList size={45} color="#fff" />
            </ContainerIcon>
            <ContenTextInfo>
              <TextRegular>
                {' '}
                <strong>Email:</strong> orcamento@farmaciaaguaviva.com
              </TextRegular>
              <TextRegular>
                <strong>Telefone:</strong> (22) 2762-6481 / (22)2762-2925
              </TextRegular>
              <TextRegular>
                <strong>WhatsApp:</strong> (22) 99609-2525
              </TextRegular>
            </ContenTextInfo>
          </ContainerInfo>
        </ContentInfoContacts>

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3689.3555589183106!2d-41.7777453254209!3d-22.377949619183884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x963063dbfd747d%3A0x61179ecc438b11bd!2zw4FndWEgVml2YSB8IEZhcm3DoWNpYSBkZSBNYW5pcHVsYcOnw6Nv!5e0!3m2!1spt-BR!2sbr!4v1729104973114!5m2!1spt-BR!2sbr"
          loading="lazy"
        ></iframe>
      </ContainerInfoContacts>

      <CallAction />

      <ContainerInfoContacts>
        <ContentInfoContacts>
          <TitleText color="blue-100" size="s">
            - Cabo Frio RJ
          </TitleText>
          <TitleText color="text" size="l">
            Nossa localização e Horários em Cabo Frio RJ
          </TitleText>

          <TextRegular>
            CNPJ 26.520.725/0001-02 Farmácia AV de Cabo Frio Ltda
          </TextRegular>

          <ContainerInfo>
            <ContainerIcon>
              <MapPinArea size={45} color="#fff" />
            </ContainerIcon>
            <ContenTextInfo>
              <TextRegular>
                <strong>Endereço:</strong> Rua Raul Veiga, 60, Centro, Cabo
                Frio/RJ. CEP 28907-090. Telefone: 22-26464313
              </TextRegular>
              <TextRegular>
                <strong>Horário de Funcionamento:</strong> segunda a sexta:
                8h00-18h00 / sábado: 8h30-12h30
              </TextRegular>
            </ContenTextInfo>
          </ContainerInfo>

          <ContainerInfoDoctor>
            <ContainerIcon>
              <ClipboardText size={45} color="#fff" />
            </ContainerIcon>

            <ContenTextInfo>
              <TextRegular>
                <strong>Farmacêutico Responsável Técnico:</strong> Patricia
                Andreoli CRF 5978/RJ
              </TextRegular>

              <TextRegular>
                <strong>Licença sanitária:</strong> 7031-01/2023 / AFE: 7519931
                / AE: 1169585
              </TextRegular>
            </ContenTextInfo>
          </ContainerInfoDoctor>

          <ContainerInfo>
            <ContainerIcon>
              <PhoneList size={45} color="#fff" />
            </ContainerIcon>
            <ContenTextInfo>
              <TextRegular>
                {' '}
                <strong>Email:</strong> aguavivacf@farmaciaaguaviva.com
              </TextRegular>
              <TextRegular>
                <strong>Telefone:</strong> Tel: (22) 2646-4313 / (22)2646-4822
              </TextRegular>
              <TextRegular>
                <strong>WhatsApp:</strong> (22) 99895-4271
              </TextRegular>
            </ContenTextInfo>
          </ContainerInfo>
        </ContentInfoContacts>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.9585311253763!2d-42.01739512540117!3d-22.87799023684113!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9704b725db8913%3A0x6e4da2211c482cce!2zRmFybcOhY2lhIMOBZ3VhIFZpdmE!5e0!3m2!1spt-BR!2sbr!4v1729104951123!5m2!1spt-BR!2sbr"></iframe>
      </ContainerInfoContacts>

      <Footer />
    </Container>
  )
}
