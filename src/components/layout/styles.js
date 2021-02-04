import styled from "styled-components"
import { color } from "../../constants/theme"
import { customMedia } from '../../constants/breakpoints';

export const Container = styled.div`
  margin-left: 15%;
  background: ${color('mainBackground')};

  ${customMedia.lessThan('laptopM')`
    margin-left: 17%;
  `}

  ${customMedia.lessThan('laptop')`
    margin-left: 0;
  `}
`