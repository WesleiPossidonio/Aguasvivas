import styled from "styled-components";

export const ContainerFaq = styled.section`
width: 100%;
height: 42rem;

padding: 3rem 2rem;

display: flex;
flex-direction: column;
align-items: center;
justify-content: flex-start;
gap: 2rem;
`

export const ContainerTitle = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 0.3rem;

`

export const ContainerAcordion = styled.div`
display: flex;
align-items: center;
justify-content: center;
gap: 2rem;
`

export const ContentAcordion = styled(ContainerFaq)`
gap: 1.5rem;
`