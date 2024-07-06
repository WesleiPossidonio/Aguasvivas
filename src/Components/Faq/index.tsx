import { ContainerAcordion, ContainerFaq, ContainerTitle, ContentAcordion } from "./styled"
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
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
           <Accordion defaultExpanded>
              <AccordionSummary
                expandIcon={<CaretDown size={25} />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <Typography>Expanded by default</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                  malesuada lacus ex, sit amet blandit leo lobortis eget.
                </Typography>
              </AccordionDetails>
           </Accordion>

          <Accordion>
            <AccordionSummary
              expandIcon={<CaretDown size={25} />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              <Typography>Header</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary
              expandIcon={<CaretDown size={25} />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              <Typography>Header</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary
              expandIcon={<CaretDown size={25} />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              <Typography>Header</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </ContentAcordion>

        <ContentAcordion>
           <Accordion defaultExpanded>
              <AccordionSummary
                expandIcon={<CaretDown size={25} />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <Typography>Expanded by default</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                  malesuada lacus ex, sit amet blandit leo lobortis eget.
                </Typography>
              </AccordionDetails>
           </Accordion>

          <Accordion>
            <AccordionSummary
              expandIcon={<CaretDown size={25} />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              <Typography>Header</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary
              expandIcon={<CaretDown size={25} />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              <Typography>Header</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary
              expandIcon={<CaretDown size={25} />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              <Typography>Header</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </ContentAcordion>
      </ContainerAcordion>
      
      
    </ContainerFaq>
  )
}


