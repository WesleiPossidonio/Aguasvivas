import styled from 'styled-components'

export const Container = styled.main`
  width: 100%;
  height: 100vh;
`

export const ContainerInfoContacts = styled.section`
  width: 100%;
  height: 35rem;
  min-height: max-content;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4rem;
  margin: 2.5rem 0 3.5rem 0;
  padding: 3rem;

  iframe {
    width: 50%;
    height: 28rem;

    margin-top: 4rem;
    border: none;
    border-radius: 12px;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
  }

  @media (max-width: 900px) {
    flex-wrap: wrap;
    gap: 2rem;
    padding: 1.5rem;

    iframe { 
      width: 100%;
    }
  }
`

export const ContentInfoContacts = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 1.5rem;

  p, button {
    margin-top: 1rem;
  }

  
  @media (max-width: 900px) {
    width: 100%;
  }

`
export const ContainerInfo = styled.div`
width: 100%;
display: flex;
align-items: center;
justify-content: center;
gap: 1.5rem;
`
export const ContainerInfoDoctor = styled(ContainerInfo)`
margin-left: 2.5rem;

@media (max-width: 768px) {
  margin-left: 0;
  }
`

export const ContainerIcon = styled.span`
width: 15%;
height: 5rem;

display: flex;
align-items: center;
justify-content: center;

padding: 1rem;

border-radius: 12px;

background-color: ${({theme}) => theme.colors['base-bg']};

@media (max-width: 430px) {
  height: 4rem;
  }
`

export const ContenTextInfo = styled.div`
width: 85%;
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: center;
gap: 0.3rem;

p {
  margin-top: 0;
}
`