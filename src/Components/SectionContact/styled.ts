import styled from "styled-components";

export const ContainerContact = styled.section`
width: 100%;
height: 50rem;
padding: 6rem 4rem;

display: flex;
align-items: center;
justify-content: center;
background-color: ${({theme}) => theme.colors["base-secundary-bg"]};
`

export const ContentContact = styled.div`
width: 100%;
height: 42rem;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 2rem;

padding: 3rem;

border: none;
border-radius: 12px;

background-color: ${({theme}) => theme.colors["base-white"]};
box-shadow: rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;
`

export const ContentInfo = styled.div`
width: 100%;
display: flex;
align-items: flex-start;
justify-content: space-between;
`

export const ContainerEmailAndWhatsapp = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: center;
gap: 1.5rem;

margin-top: 1rem;

`
export const ContentEmailAndWhatsapp = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: center; 
gap: 0.3rem;

h1 {
  display: flex;
  align-items: center;
  gap: 0.4rem;
}

a {
  font-size: ${({theme}) => theme.FontSizes["text-regular-sm"]};
  color: ${({theme}) => theme.colors["base-text"]};
}

div {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center; 
  gap: 0.3rem;
  margin-left: 2.7rem;
}
`

export const ContentForm = styled.form`
width: 50%;
padding: 2rem 1.5rem;

display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 1rem;

border: none;
border-radius: 8px;

box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
background-color: ${({theme}) => theme.colors["base-secundary-bg"]};

button {
  align-self: flex-start;
  margin-top: 1rem;
}
`
export const ContentTitle = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 0.3rem;
margin-bottom: 0.8rem;
`


interface TextAreaProps {
  error?: string
}

export const TextArea = styled.textarea<TextAreaProps>`
  width: 100%;
  height: 8rem;

  padding: 0.5rem;
  border: 2px solid
    ${({ theme, error }) =>
      error !== undefined
        ? theme.colors['base-red']
        : theme.colors['base-white']};
  border-radius: 8px;

  font-size: 0.8835125rem;
  line-height: 1.3125rem;
  font-style: normal;
  font-weight: 400;

  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;

  background: ${({ theme }) => theme.colors['base-white']};

  &::placeholder {
    color: ${({ theme }) => theme.colors['base-text']};
  }

  &:focus {
    border: 2px solid ${({ theme }) => theme.colors['base-bg']};
    border-radius: 8px;
  }
`

export const Span = styled.span`
width: 3rem;
height: 3rem;
display: flex;
align-items: center;
justify-content: center;

border-radius: 99999px;

padding: 0.7rem;
background-color: ${({theme}) => theme.colors["base-bg"]};

svg {
  color: ${({theme}) => theme.colors["base-white"]};
}
`