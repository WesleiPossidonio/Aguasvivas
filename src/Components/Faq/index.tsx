import { AccordionContent, ContainerAcordion, ContainerFaq, ContainerTitle, ContentAcordion } from "./styled"
import Accordion from '@mui/material/Accordion';

import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { CaretDown } from "@phosphor-icons/react";
import { TextRegular, TitleText } from "../typograph";


export const Faq = () => {
  return (
    <ContainerFaq>
      <ContainerTitle>
        <TextRegular color="blue-100">FAQ</TextRegular>
        <TitleText size="l">Principais Dúvidas</TitleText>
      </ContainerTitle>

      <ContainerAcordion>
        <ContentAcordion>
           <Accordion>
              <AccordionContent
                expandIcon={<CaretDown size={25} />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <Typography>O que é uma farmácia de manipulação?</Typography>
              </AccordionContent>
              <AccordionDetails>
                <Typography>
                  Uma farmácia de manipulação é um estabelecimento 
                  onde os medicamentos são preparados de forma personalizada, 
                  conforme prescrição médica, ajustados às necessidades 
                  individuais de cada paciente.
                </Typography>
              </AccordionDetails>
           </Accordion>

          <Accordion>
            <AccordionContent
              expandIcon={<CaretDown size={25} />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              <Typography>Quais são as vantagens dos medicamentos manipulados?</Typography>
            </AccordionContent>
            <AccordionDetails>
              <Typography>
                Os medicamentos manipulados oferecem vantagens como 
                personalização das dosagens e ingredientes, adaptação às 
                necessidades específicas do paciente, e possibilidade de 
                combinação de diferentes substâncias em uma única formulação.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionContent
              expandIcon={<CaretDown size={25} />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              <Typography>Como faço para solicitar um medicamento manipulado?</Typography>
            </AccordionContent>
            <AccordionDetails>
              <Typography>
                Você pode solicitar um medicamento manipulado através de receita
                médica, entregando-a diretamente na farmácia de manipulação ou 
                enviando-a por e-mail. Nossa equipe entrará em contato para 
                confirmar os detalhes da sua prescrição.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionContent
              expandIcon={<CaretDown size={25} />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              <Typography>Os medicamentos manipulados são seguros?</Typography>
            </AccordionContent>
            <AccordionDetails>
              <Typography>
                Sim, os medicamentos manipulados são seguros quando preparados 
                por farmácias de manipulação regulamentadas e que seguem as boas 
                práticas de manipulação estabelecidas pela legislação sanitária.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionContent
              expandIcon={<CaretDown size={25} />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              <Typography>
                Quanto tempo leva para preparar um medicamento manipulado?
              </Typography>
            </AccordionContent>
            <AccordionDetails>
              <Typography>
                O tempo de preparo pode variar de acordo com a complexidade da 
                fórmula e a demanda da farmácia, geralmente podendo levar de 
                algumas horas a alguns dias.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </ContentAcordion>

        <ContentAcordion>
           <Accordion>
              <AccordionContent
                expandIcon={<CaretDown size={25} />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <Typography> Os medicamentos manipulados têm validade?</Typography>
              </AccordionContent>
              <AccordionDetails>
                <Typography>
                  Sim, assim como os medicamentos industrializados, os manipulados 
                  também têm prazo de validade determinado. Este prazo pode variar 
                  conforme o tipo de medicamento e os componentes da fórmula.
                </Typography>
              </AccordionDetails>
           </Accordion>

          <Accordion>
            <AccordionContent
              expandIcon={<CaretDown size={25} />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              <Typography>Como posso pagar pelos medicamentos manipulados?</Typography>
            </AccordionContent>
            <AccordionDetails>
              <Typography>
                Você pode pagar pelos medicamentos manipulados de diversas formas, 
                incluindo dinheiro, cartões de crédito e débito, e algumas 
                farmácias de manipulação também aceitam planos de saúde.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionContent
              expandIcon={<CaretDown size={25} />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              <Typography>
                Posso encomendar medicamentos manipulados pela internet?
              </Typography>
            </AccordionContent>
            <AccordionDetails>
              <Typography>
                Sim, muitas farmácias de manipulação oferecem o serviço 
                de encomenda de medicamentos via internet. Você pode enviar 
                sua receita por e-mail ou através de formulários específicos 
                disponíveis no site da farmácia.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionContent
              expandIcon={<CaretDown size={25} />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              <Typography>
                Os medicamentos manipulados são mais caros que os 
                industrializados?
              </Typography>
            </AccordionContent>
            <AccordionDetails>
              <Typography>
                Os preços dos medicamentos manipulados podem variar conforme a 
                complexidade da formulação e a quantidade de ingredientes 
                utilizados. Em alguns casos, os medicamentos manipulados podem 
                ser mais caros que os industrializados devido à sua personalização 
                e preparo individualizado.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionContent
              expandIcon={<CaretDown size={25} />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              <Typography>
                Como posso verificar a qualidade da farmácia de manipulação?
              </Typography>
            </AccordionContent>
            <AccordionDetails>
              <Typography>
                É importante verificar se a farmácia de manipulação está 
                regularizada pelos órgãos de vigilância sanitária e se segue 
                as boas práticas de manipulação. Além disso, procure 
                referências de outros clientes e verifique se a farmácia possui 
                certificações e selos de qualidade reconhecidos.
              </Typography>
            </AccordionDetails>
          </Accordion>

        </ContentAcordion>
      </ContainerAcordion>
    </ContainerFaq>
  )
}


