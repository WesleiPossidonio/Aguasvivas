import styled from "styled-components";

export const ContainerCalAction = styled.section`
width: 100%;
height: 36rem;

margin: 0 auto;
padding: 2rem 4rem;
background-color: ${({theme}) => theme.colors["base-white"] };
`

import ImageCallAction from '../../assets/ImgCallAction.jpg'

export const ContentCallAction = styled.div`
width: 100%;
height: 30rem;

display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 1.5rem;

padding: 2rem;
border-radius: 18px;

background-image: url(${ImageCallAction});
background-position: center center;
background-repeat: no-repeat;
background-size: cover;

position: relative;

&::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(108, 184, 216, 0.5);
    border-radius: 18px;
  }

  h1,
  p {
    max-width: 75%;
    text-align: center;
    z-index: 1;
  }
`