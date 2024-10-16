import styled from 'styled-components'

export const Container = styled.main`
  width: 100%;
  height: 100vh;
`

export const ContainerProducts = styled.section`
  width: 100%;
  height: 35rem;
  min-height: max-content;

  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 2rem;
  margin-top: 2.5rem;
  padding: 3rem;

  @media (max-width: 970px) {
  padding: 1.5rem;
  }

  @media (max-width: 768px) {
  flex-wrap: wrap;
  }
`

export const ContentText = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 0.2rem;

  p, button {
    margin-top: 1rem;
  }

  @media (max-width: 970px) {
    width: 45%;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`
