import styled from 'styled-components'

export const ContainerAbout = styled.section`
  width: 100%;
  height: 42rem;

  padding: 0 4rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;

  align-content: center;
  position: relative;
  background-color: ${({ theme }) => theme.colors['base-secundary-bg']};

  @media (max-width: 1024px) {
    padding: 2rem;
  }

  @media (max-width: 768px) {
    height: max-content;
    flex-direction: column;
    justify-content: center;
    gap: 10rem;

    margin-bottom: 10rem;
  }
`

export const ContentText = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 0.9rem;

  @media (max-width: 768px) {
    width: 100%;
  }
`

export const ContainerNumbersCompany = styled.div`
  width: 85%;
  height: 8rem;
  padding: 1.2rem;
  margin-top: 0.7rem;

  display: flex;
  align-items: center;
  justify-content: space-evenly;

  z-index: 2;
  border-radius: 14px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

  @media (max-width: 320px) {
    width: 100%;
  }
`

export const DataCompanyOne = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.3rem;

  padding: 1.5rem;

  text-align: center;

  @media (max-width: 1024px) {
    padding: 0;
  }
`

export const ContainerImage = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  .imgOne {
    position: absolute;
    bottom: -7.5rem;
    right: 12rem;
    z-index: 2;
  }

  .imgTwo {
    margin-top: -5rem;
    margin-left: 12rem;
  }

  @media (max-width: 1234px) {
    .imgOne {
      right: 7.5rem !important;
    }

    .imgTwo {
      margin-left: 7.5rem;
    }
  }

  @media (max-width: 600px) {
    .imgOne {
      right: 0.5rem !important;
      bottom: -6.5rem;
    }

    .imgTwo {
      margin-left: 5.5rem;
      margin-top: -7rem;
    }

    @media (max-width: 320px) {
      .imgOne {
        bottom: -4.5rem;
      }
    }
  }
`

export const Image = styled.img`
  width: min(20rem, 30vw);
  border-radius: 12px;

  @media (max-width: 768px) {
    width: min(20rem, 50vw);
  }
`
