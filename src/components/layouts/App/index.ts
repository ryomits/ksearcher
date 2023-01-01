import styled from 'styled-components'

export const AppLayout = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (orientation: landscape) and (min-device-width: 319px) and (max-device-width: 520px) {
    height: 150vh;
  }
`
