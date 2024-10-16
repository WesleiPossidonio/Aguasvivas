import { useEffect, useState } from 'react'
import {
  ContainerHeaderMenu,
  Dropdown,
  ImgLogo,
  NavDesktop,
  NavLink,
  NavLinkMobile,
  NavMobile,
} from './styled'
import Logo from '../../assets/logo.png'
import { useNavigate } from 'react-router-dom'
import { List, X } from '@phosphor-icons/react'

export const HeaderMenu = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [stateBackgroundHeader, setStateBackgroundHeader] =
    useState<boolean>(false)

  const navigate = useNavigate()

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY

      if (scrollTop > 50) {
        setStateBackgroundHeader(true)
      } else {
        setStateBackgroundHeader(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const handleStateMenuMobile = () => {
    setIsOpen((open: boolean) => !open)
  }

  return (
    <ContainerHeaderMenu stateHeader={stateBackgroundHeader}>
      <ImgLogo src={Logo} />

      {isOpen ? (
        <X size={35} weight="bold" color='#15A4C4' onClick={handleStateMenuMobile} />
      ) : (
        <List size={35} weight="bold" color='#fff' onClick={handleStateMenuMobile} />
      )}


      <NavDesktop>
        <NavLink stateHeader={stateBackgroundHeader} href="#home">
          Home
        </NavLink>
        <NavLink stateHeader={stateBackgroundHeader} href="#about">
          Sobre Nós
        </NavLink>
        <Dropdown>
          <NavLink stateHeader={stateBackgroundHeader} href="#produtos">
            Nossos Produtos
            <div className="dropdown-item">
              <NavLink stateHeader={stateBackgroundHeader}>Manipulados</NavLink>
              <NavLink stateHeader={stateBackgroundHeader}>Suplementos</NavLink>
              <NavLink stateHeader={stateBackgroundHeader}>
                Dermocosméticos
              </NavLink>
              <NavLink stateHeader={stateBackgroundHeader}>
                Homeopatia e Florais
              </NavLink>
            </div>
          </NavLink>
        </Dropdown>

        <NavLink stateHeader={stateBackgroundHeader} href="#companies">
          Lojas
        </NavLink>
        <NavLink stateHeader={stateBackgroundHeader} href="#contato">
          Contatos
        </NavLink>
      </NavDesktop>

      <NavMobile isOpen={isOpen}>
        <NavLinkMobile href="#home" onClick={handleStateMenuMobile}>
          Home
        </NavLinkMobile>

        <NavLinkMobile href="#about" onClick={handleStateMenuMobile}>
          Sobre Nós
        </NavLinkMobile>

        <NavLinkMobile href="#principes" onClick={handleStateMenuMobile}>
          Serviços
        </NavLinkMobile>

        <NavLinkMobile href="#Contatos" onClick={handleStateMenuMobile}>
          Contatos
        </NavLinkMobile>
      </NavMobile>
    </ContainerHeaderMenu>
  )
}
