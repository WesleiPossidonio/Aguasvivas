import styled from 'styled-components'

export const ContainerImages = styled.div`
  width: min(32rem, 45vw);
  height: 25rem;

  display: flex;
  align-items: flex-start;
  justify-content: center;
  border-radius: 12px;

  background-color: ${({ theme }) => theme.colors['base-bg']};

  @media (max-width: 768px) {
    margin: 0 auto;
    width: min(32rem, 75vw);
  }

  @media (max-width: 500px) {
    height: 20rem;
  }

  @media (max-width: 425px) {
    height: 14rem;
    margin-left: 2.8rem;
  }

  @media (max-width: 340px) {
    margin-left: 4.5rem;
  }
`

export const Image = styled.img`
  width: min(32rem, 45vw);
  height: 25rem;
  object-fit: cover;
  border-radius: 12px;
  margin: 2rem 0 0 -4rem;

  box-shadow:
    rgba(0, 0, 0, 0.12) 0px 1px 3px,
    rgba(0, 0, 0, 0.24) 0px 1px 2px;

  @media (max-width: 768px) {
    width: min(32rem, 75vw);
  }

  @media (max-width: 500px) {
    height: 20rem;
  }

  @media (max-width: 425px) {
    height: 14rem;
  }
`
