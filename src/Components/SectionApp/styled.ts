import styled from 'styled-components'

export const ContainerSectionApp = styled.section`
  width: 100%;
  padding: 2rem 4rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 5rem;

  @media (max-width: 1024px) {
    padding: 2rem;
  }
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

  @media (max-width: 944px) {
    padding: 0;
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

export const ImgApp = styled.img`
  width: min(30.5rem, 40vw);

  @media (max-width: 768px) {
    order: 2;
  }

  @media (max-width: 600px) {
    width: 17rem;
  }
`

export const ContentAdjectives = styled(ContentTextApp)`
  @media (max-width: 768px) {
    width: 100%;
  }
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
  background-color: ${({ theme }) => theme.colors['base-white']};
`

export const BoxText = styled(ContentTextApp)`
  width: 85%;
  gap: 0.5rem;
`
