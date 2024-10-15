import styled from "styled-components";

interface ButtonProps {
  btnLarge: boolean
}

export const ContainerButton = styled.button<ButtonProps>`
width: ${({btnLarge}) => btnLarge ? '15rem' : '10rem'} ;
height: 3.5rem;

padding: 0.5rem;
border: none;
border-radius: 8px;

font-size: ${({theme}) => theme.FontSizes["text-regular-m"]};
font-weight: 500;
color: ${({theme}) => theme.colors["base-white"]};

background-color: ${({theme}) => theme.colors["base-bg"]};
z-index: 1;

cursor: pointer;

&:hover {
  transform: scale(1.1) !important;
  transition: all 0.5s;
}
`