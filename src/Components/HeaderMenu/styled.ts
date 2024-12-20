import styled from 'styled-components'
import { Link } from 'react-scroll'
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

  > svg {
    display: none;
    z-index: 9999;
  }

  @media (max-width: 970px) {
    > svg {
      display: block;
      color: ${({ theme }) => theme.colors['base-bg']};
    }
  }

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
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

export const ImgLogo = styled.img`
  width: 10rem;
`

export const Dropdown = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .dropdown-item {
    width: 15rem;

    position: absolute;
    top: 1.4rem;
    z-index: 3;

    display: none;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 0.8rem;

    padding: 1rem;
    border: none;
    border-radius: 6px;
    background-color: ${({ theme }) => theme.colors['base-bg']};
  }

  &:hover,
  &:active {
    .dropdown-item {
      display: flex;
    }
  }
`
interface NavMobileProps {
  isOpen: boolean
}

export const NavMobile = styled.nav<NavMobileProps>`
  width: 100%;
  height: 100vh;
  overflow: hidden;

  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  position: absolute;
  bottom: 0;
  top: 0;
  left: 0;
  right: 0;

  z-index: 99;

  background-color: ${({ theme }) => theme.colors['base-white']};
`

export const NavLinkMobile = styled(NavLink)`
  font-size: ${({ theme }) => theme.FontSizes['title-regular-m']};
  color: ${({ theme }) => theme.colors['base-bg']};
  font-weight: 500;
`
