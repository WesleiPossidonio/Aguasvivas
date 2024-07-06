import styled from "styled-components";
import ImageComments from '../../assets/ImgCallAction.jpg'

export const ContainerComments = styled.section`
width: 100%;
height: 40rem;

display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 1.5rem;

padding:2rem;

background-image: url(${ImageComments});
background-position: center center;
background-repeat: no-repeat;
background-size: cover;

position: relative;

&::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(108, 184, 216, 0.5);
  }

  h1{
    margin-bottom: 2rem;
  }

  h1,
  p {
    max-width: 75%;
    text-align: center;
    z-index: 1;
  }

  .mySwiper {
    width: 90%;
    height: 15rem;
  }

  .ContentSlide {
  width: 40rem;
  min-height: max-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.3rem;

  padding: 0.5rem;
  border-radius: 8px;

  box-shadow:
  rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
  rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;

  background-color: ${({ theme }) => theme.colors['base-white']};
  opacity: 0.8;

  > h1 {
    align-self: flex-start;
    margin-top: 1rem;
  }
}
`

export const CommentsHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 0.5rem;
`