import styled from "styled-components";

export const ContainerAbout = styled.section`
width: 100%;
height: 45rem;

padding: 0 4rem;

display: flex;
align-items: center;
justify-content: center;
gap: 1rem;
align-content: center;
position: relative;
background-color: ${({theme}) => theme.colors["base-secundary-bg"]};
`

export const ContentText = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
gap: 0.9rem;
`

export const ContainerNumbersCompany = styled.div`
width: 85%;
height: 8rem;
padding: 1.2rem;

display: flex;
align-items: center;
justify-content: space-evenly;

z-index: 2;
border-radius: 14px;
box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
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
`

export const ContainerImage = styled.div`
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
`

export const Image = styled.img`
width: 20rem;
border-radius: 12px;
`