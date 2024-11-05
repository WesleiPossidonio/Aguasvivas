import styled from 'styled-components'

import ImageCallAction from '../../assets/ImgCallAction.jpg'

export const ContainerCallAction = styled.section`
  width: 100%;
  height: 36rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;

  padding: 2rem;

  background-image: url(${ImageCallAction});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;

  text-align: center;

  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(108, 184, 216, 0.5);
  }

  h1,
  p {
    max-width: 75%;
    text-align: center;
    z-index: 1;
  }

  @media (max-width: 768px) {
    height: 28rem;

    h1,
    p {
      max-width: 95%;
      text-align: center;
      z-index: 1;
    }

    h1 {
      font-size: min(2.6rem, 9vw);
    }
  }
`
