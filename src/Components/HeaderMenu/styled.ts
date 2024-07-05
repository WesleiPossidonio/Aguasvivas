import styled from "styled-components";

interface HeaderProps {
  stateHeader?: boolean
}

export const ContainerHeaderMenu = styled.header<HeaderProps>`
width: 100%;
height: 4rem;
padding: 2rem;

display: flex;
justify-content: space-between;
align-items: center;

background: ${({ theme, stateHeader }) =>
    stateHeader === true ? theme.colors['base-bg'] : 'transparent'};
`

export const NavDesktop = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;

  @media (max-width: 970px) {
    display: none;
  }
`

export const NavLink = styled.a<HeaderProps>`
  font-size: ${({ theme }) => theme.FontSizes['text-regular-m']};
  font-style: normal;
  font-weight: 600;
  line-height: normal;

  text-decoration: none;

  color: ${({ theme, stateHeader }) =>
    stateHeader === true
      ? theme.colors['base-white']
      : theme.colors['base-white']};
  cursor: pointer;

  transition: 0.2s ease-in;

  &:hover {
    color: ${({ theme }) => theme.colors['base-blue-500']};
  }
`