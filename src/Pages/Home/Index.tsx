import { 
  About, 
  CallAction, 
  Comments, 
  Faq, 
  Footer, 
  MainPage, 
  SectionApp, 
  SectionContact, 
  SectionService 
} from "../../Components"
import { ContainerHome } from "./styled"

export const Home = () => {
  return (
    <ContainerHome>
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


