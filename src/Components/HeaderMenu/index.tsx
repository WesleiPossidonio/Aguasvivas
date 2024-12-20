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
import { useNavigate, useLocation } from 'react-router-dom'
import { List, X } from '@phosphor-icons/react'

export const HeaderMenu = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [stateBackgroundHeader, setStateBackgroundHeader] =
    useState<boolean>(false)

  const navigate = useNavigate()
  const location = useLocation()

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

  // Função para navegação e manipulação de âncoras
  const handleNavigate = (path: string) => {
    if (location.pathname !== '/') {
      navigate(`/${path}`)
    } else {
      window.location.hash = path
    }
    if (isOpen) handleStateMenuMobile()
  }

  return (
    <ContainerHeaderMenu stateHeader={stateBackgroundHeader}>
      <ImgLogo src={Logo} onClick={() => navigate('/')} />

      {isOpen ? (
        <X
          size={35}
          weight="bold"
          color="#15A4C4"
          onClick={handleStateMenuMobile}
        />
      ) : (
        <List
          size={35}
          weight="bold"
          color="#fff"
          onClick={handleStateMenuMobile}
        />
      )}

      <NavDesktop>
        <NavLink
          stateHeader={stateBackgroundHeader}
          onClick={() => handleNavigate('#home')}
        >
          Home
        </NavLink>
        <NavLink
          stateHeader={stateBackgroundHeader}
          onClick={() => handleNavigate('#about')}
        >
          Sobre Nós
        </NavLink>
        <Dropdown>
          <NavLink
            stateHeader={stateBackgroundHeader}
            onClick={() => handleNavigate('#produtos')}
          >
            Nossos Produtos
            <div className="dropdown-item">
              <NavLink
                stateHeader={stateBackgroundHeader}
                onClick={() => navigate('/manipulados')}
              >
                Manipulados
              </NavLink>
              <NavLink
                stateHeader={stateBackgroundHeader}
                onClick={() => navigate('/suplementos')}
              >
                Suplementos
              </NavLink>
              <NavLink
                stateHeader={stateBackgroundHeader}
                onClick={() => navigate('/dermocosmeticos')}
              >
                Dermocosméticos
              </NavLink>
              <NavLink
                stateHeader={stateBackgroundHeader}
                onClick={() => navigate('/homepatia-e-florais')}
              >
                Homeopatia e Florais
              </NavLink>
            </div>
          </NavLink>
        </Dropdown>

        <NavLink
          stateHeader={stateBackgroundHeader}
          onClick={() => navigate('/lojas')}
        >
          Lojas
        </NavLink>
        <NavLink
          stateHeader={stateBackgroundHeader}
          onClick={() => handleNavigate('#contato')}
        >
          Contatos
        </NavLink>
      </NavDesktop>

      <NavMobile isOpen={isOpen}>
        <NavLinkMobile onClick={() => handleNavigate('#home')}>
          Home
        </NavLinkMobile>
        <NavLinkMobile onClick={() => handleNavigate('#about')}>
          Sobre Nós
        </NavLinkMobile>
        <NavLinkMobile onClick={() => handleNavigate('#principes')}>
          Serviços
        </NavLinkMobile>
        <NavLinkMobile onClick={() => handleNavigate('#contato')}>
          Contatos
        </NavLinkMobile>
      </NavMobile>
    </ContainerHeaderMenu>
  )
}
