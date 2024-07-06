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

display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: flex-start;
gap: 0.5rem;
position: relative;

padding: 2rem;
border: none;
border-radius: 8px;
background-color: ${({theme}) => theme.colors["base-bg"]};

img {
  width: 10.5rem;
  position: absolute;
  bottom: 0.6rem;
  right: 2rem;
}
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

display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: flex-start;
gap: 0.5rem;

padding: 2rem;
border: none;
border-radius: 12px;
background-color: ${({theme, colors}) => 
colors === 'boxOne' ? theme.colors["base-blue-200"] 
: theme.colors["base-blue-300"]};

position: relative;

img {
  width: ${({colors}) => 
colors === 'boxOne' ? '12.5rem' 
: '8.5rem'};
  position: absolute;
  bottom: 0.6rem;
  right: 1rem;
}
`

export const BoxLarge = styled.div`
width: 100%;
height: 50%;

padding: 2rem;
border: mone;
border-radius: 12px;
background-color: ${({theme}) => theme.colors["base-blue-100"]};

position: relative;

img {
  width: 17rem;
  position: absolute;
  bottom: -0.5rem;
  right: 2rem;
}

`