import styled from 'styled-components'

export const Container = styled.main`
  width: 100%;
  height: 100vh;
`

export const ContainerProducts = styled.section`
  width: 100%;
  height: 37rem;

  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 2rem;
  margin-top: 2.5rem;
  padding: 3rem;
`

export const ContentText = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 0.2rem;

  p {
    margin-top: 1rem;
  }

  button {
    margin-top: 0.2rem;
  }

`
