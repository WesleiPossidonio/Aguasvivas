import styled from 'styled-components'

export const ContainerSectionService = styled.section`
  width: 100%;
  height: 45rem;
  min-height: max-content;
  padding: 2rem 4rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  margin-top: 6rem;

  @media (max-width: 1024px) {
    padding: 2rem;
  }

  @media (max-width: 679px) {
    flex-direction: column;
    gap: 3.5rem;
  }
`

export const BoxServices = styled.div`
  width: 30%;
  min-height: 100%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.5rem;
  position: relative;

  padding: 2rem;
  border: none;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors['base-bg']};

  img {
    width: 10.5rem;
    position: absolute;
    bottom: 0.6rem;
    right: 2rem;
  }

  @media (max-width: 679px) {
    width: 100%;
    min-height: 15rem;
    padding: 1.5rem 1rem;

    img {
      width: min(5.5rem, 12vw);
      position: absolute;
      bottom: 0.6rem;
      right: 4rem;
    }
  }

  @media (max-width: 528px) {
    img {
      right: 2rem;
    }
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

  @media (max-width: 679px) {
    width: 100%;
  }
`

export const BoxContent = styled.div`
  width: 100%;
  height: 50%;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  @media (max-width: 600px) {
    height: max-content;
    flex-direction: column;
  }
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
  background-color: ${({ theme, colors }) =>
    colors === 'boxOne'
      ? theme.colors['base-blue-200']
      : theme.colors['base-blue-300']};

  position: relative;

  img {
    width: ${({ colors }) =>
      colors === 'boxOne' ? 'min(12.5rem, 23vw)' : 'min(8.5rem, 17vw)'};
    position: absolute;
    bottom: 0.6rem;
    right: 1rem;
  }

  @media (max-width: 679px) {
    height: 14rem;
    padding: 1.5rem 1rem;
  }
`

export const BoxLarge = styled.div`
  width: 100%;
  min-height: 50%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.5rem;

  padding: 2rem;
  border: none;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.colors['base-blue-100']};

  position: relative;

  img {
    width: 17rem;
    position: absolute;
    bottom: -0.5rem;
    right: 2rem;
  }

  @media (max-width: 679px) {
    width: 100%;
    min-height: 15rem;
    padding: 1.5rem 1rem;

    img {
      width: min(12.5rem, 30vw);
      bottom: -0.4rem;
      right: 4rem;
    }
  }

  @media (max-width: 444px) {
    img {
      bottom: -0.2rem;
      right: 1rem;
    }
  }
`

export const ButtonServices = styled.button`
  width: 5.5rem;
  padding: 0.6rem;

  border: none;
  border-radius: 4px;

  font-size: 0.7rem;
  font-weight: 600;

  cursor: pointer;

  background-color: ${({ theme }) => theme.colors['base-white']};

  &:hover {
    opacity: 0.9;
  }
`
