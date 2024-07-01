import { useEffect, useState } from "react"
import { ContainerHeaderMenu, NavDesktop, NavLink } from "./styled"
import { TitleText } from "../typograph"


export const HeaderMenu = () => {
  const [stateBackgroundHeader, setStateBackgroundHeader] =
    useState<boolean>(false)

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

  return (
    <ContainerHeaderMenu stateHeader={stateBackgroundHeader}>
      <TitleText color="white">LOGO</TitleText>

       <NavDesktop>
        <NavLink
          stateHeader={stateBackgroundHeader}
          href="#home"
        
        >
          Home
        </NavLink>
        <NavLink
          stateHeader={stateBackgroundHeader}
          href="#about"
        
        >
          Sobre Nós
        </NavLink>
        <NavLink
          stateHeader={stateBackgroundHeader}
          href="#principes"
        
        >
          Nossos Produtos
        </NavLink>
        <NavLink
          stateHeader={stateBackgroundHeader}
          href="#companies"
        
        >
          Lojas
        </NavLink>
        <NavLink
          stateHeader={stateBackgroundHeader}
          href="#contact"
        
        >
          Contatos
        </NavLink>
      </NavDesktop>
    </ContainerHeaderMenu>
  )
}


