import styled from "styled-components";

export const ContainerImages = styled.div`
width: 32rem;
height: 25rem;

display: flex;
align-items: flex-start;
justify-content: center;
border-radius: 12px;

background-color: ${({theme}) => theme.colors["base-bg"]};
`

export const Image = styled.img`
width: 32rem;
height: 25rem;
object-fit: cover;
border-radius: 12px;
margin: 2rem 0 0 -4rem;

box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
`