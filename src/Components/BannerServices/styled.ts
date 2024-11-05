import styled from 'styled-components'
import Img from '../../assets/banner-sec.jpg'

export const ContainerBannerService = styled.div`
  width: 100%;
  height: 20rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  background-image: url(${Img});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;

  h1 {
    margin-top: 2rem;
  }

  p {
    cursor: pointer;
  }

  @media (max-width: 422px) {
    h1 {
      font-size: ${({ theme }) => theme.FontSizes['title-regular-m']};
    }
  }
`

export const ContentLinks = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
`
