import styled from "styled-components";

export const ContainerSectionApp = styled.section`
width: 100%;
height: 45rem;
padding: 2rem 4rem;

display: flex;
align-items: center;
justify-content: center;
gap: 2rem;
margin-bottom: 5rem;
`

export const ContentTextApp = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: center;
gap: 1rem;
`

export const ContainerAdjectivesApp = styled.div`
width: 100%;
display: flex;
align-items: center;
justify-content: center;
gap: 6rem;

padding: 0 3rem;
margin-top: 2rem;
`

export const ImgApp = styled.img`
width: 30.5rem;
`

export const ContentAdjectives = styled(ContentTextApp)`
`

export const BoxAdjectives = styled.div`
width: 97%;
display: flex;
align-items: flex-start;
justify-content: center;
gap: 1rem;

padding: 2rem 1.5rem;
border: 0;
border-radius: 12px;
box-shadow: rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;
background-color: ${({theme}) => theme.colors["base-white"]};
`

export const BoxText = styled(ContentTextApp)`
width: 85%;
gap: 0.5rem;

`