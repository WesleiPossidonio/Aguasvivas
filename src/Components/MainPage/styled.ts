import styled from 'styled-components'

export const ContainerMainPage = styled.section`
  width: 100%;
  height: 100vh;

  .mySwiper {
    width: 100%;
  }

  .ContentSlide {
    width: 100%;
    height: 100vh;

    display: flex;
    align-items: center;
    justify-content: center;
  }
`

export const ImgBanner = styled.img`
  width: 100%;
  height: 100vh;
  object-fit: cover;
  z-index: 1;
`
export const ColorOverlay = styled.div`
  width: 100%;
  height: 100%;

  position: absolute;
  top: 0;
  left: 0;

  background: rgba(21, 164, 196, 0.4);
  z-index: 2;
`

export const Content = styled.div`
  position: absolute;
  z-index: 3;
`
