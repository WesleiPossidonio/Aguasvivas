import { 
  About, 
  CallAction, 
  Comments, 
  Faq, 
  Footer, 
  HeaderLinks, 
  HeaderMenu, 
  MainPage, 
  SectionApp, 
  SectionContact, 
  SectionService 
} from "../../Components"
import { ContainerHome, Header } from "./styled"

export const Home = () => {
  return (
    <ContainerHome>
      <Header>
        <HeaderLinks />
        <HeaderMenu />
      </Header>
      <MainPage />
      <About />
      <CallAction/>
      <SectionService />
      <SectionApp />
      <Comments/>
      <Faq />
      <SectionContact />
      <Footer />
    </ContainerHome>
  )
}


