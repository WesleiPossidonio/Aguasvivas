import { Envelope, FacebookLogo, InstagramLogo } from '@phosphor-icons/react'
import {
  ContainerHeaderLinks,
  ContainerLinks,
  ContentLinkContact,
  Link,
} from './styled'

export const HeaderLinks = () => {
  return (
    <ContainerHeaderLinks>
      <ContentLinkContact>
        <Envelope size={31} />
        <Link href="mailto:example@gmail.com">example@gmail.com</Link>
      </ContentLinkContact>

      <ContainerLinks>
        <Link href="#" target="_blank">
          <InstagramLogo size={30} />
        </Link>

        <Link href="#" target="_blank">
          <FacebookLogo size={30} />
        </Link>
      </ContainerLinks>
    </ContainerHeaderLinks>
  )
}
