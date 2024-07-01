import styled from "styled-components";

export const ContainerContact = styled.div`
width: 100%;
height: 42rem;
padding: 4rem;

display: flex;
align-items: center;
justify-content: space-around;
background-color: ${({theme}) => theme.colors["base-secundary-bg"]};
`

export const ContentInfo = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: center;

p {
  margin-bottom: 0.3rem;
}
`

export const ContainerEmailAndWhatsapp = styled.div`
display: flex;
align-items: center;
justify-content: flex-start;
gap: 1rem;

margin-top: 1rem;

> div {
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: flex-start;  
gap: 0.2rem;



a {
  font-size: ${({theme}) => theme.FontSizes["text-regular-sm"]};
  color: ${({theme}) => theme.colors["base-text"]};
}
}
`

export const Iframe = styled.iframe`
width: 100%;
height: 15rem;

border: none;
border-radius: 12px;
margin-top: 2rem;
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

background-color: ${({theme}) => theme.colors["base-white"]};
box-shadow: rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;

button {
  align-self: flex-start;
}
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
    border: 2px solid ${({ theme }) => theme.colors['base-text']};
    border-radius: 8px;
  }
`