import { ReactNode } from "react"
import { ContainerButton } from "./styled"

interface ButtonProps {
  children: ReactNode
  btnLarge: boolean
}

export const Button = ({ children, btnLarge }: ButtonProps) => {
  return (
    <ContainerButton btnLarge={btnLarge}>
      {children}
    </ContainerButton>
  )
}


