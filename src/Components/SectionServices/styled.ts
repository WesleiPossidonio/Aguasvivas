import styled from "styled-components";

export const ContainerSectionService = styled.section`
width: 100%;
height: 45rem;
padding: 2rem 4rem;

display: flex;
align-items: center;
justify-content: center;
gap: 1rem;

margin-top: 6rem;
`

export const BoxServices = styled.div`
width: 30%;
height: 100%;

border: none;
border-radius: 8px;
background-color: ${({theme}) => theme.colors["base-blue-100"]};
`

export const ContainerBoxServices = styled.div`
width: 70%;
height: 100%;

display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 1rem;
`

export const BoxContent = styled.div`
width: 100%;
height: 50%;

display: flex;
align-items: center;
justify-content: center;
gap: 1rem;
`

interface BoxProps {
  colors: 'boxOne' | 'boxTwo'
}

export const Box = styled.div<BoxProps>`
width: 100%;
height: 100%;

border: none;
border-radius: 12px;
background-color: ${({theme, colors}) => colors === 'boxOne' ? theme.colors["base-blue-200"] : theme.colors["base-blue-300"]};
`

export const BoxLarge = styled.div`
width: 100%;
height: 50%;

border: mone;
border-radius: 12px;
background-color: ${({theme}) => theme.colors["base-blue-500"]};

`