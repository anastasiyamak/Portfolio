import styled from "styled-components"
import { color, font } from "../../constants/theme"
import { customMedia } from '../../constants/breakpoints';
import media from 'styled-media-query'

export const Container = styled.div`
  background: ${color('navbar')};
  padding-top: 30px;
  width: 15%;
  height: 100vh;
  text-align: center;
  letter-spacing: 1px;
  text-transform: uppercase;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: fixed;
  z-index: 1;
  transition: all .3s linear;

  ${customMedia.lessThan('laptopM')`
    width: 17%;
  `}
  ${customMedia.lessThan('laptop')`
    width: 22%;
    transform: ${({ isOpen }) => isOpen ? 'translateX(0)' : 'translateX(-100%)'};
  `}
  ${customMedia.lessThan('tablet')`
    width: 30%;
  `}
  ${media.lessThan('570px')`
    width: 50%;
  `}
`
export const Logo = styled.div`
  width: 100%;
  cursor: pointer;
  border-bottom: 1px dotted rgb(255,255,255,.1);
  padding-bottom: 25px;

  a{
    font: ${font('logo')};
    color: ${color('red')};
    margin-bottom: 5px;
    border-bottom: 4px solid #fff;
    display: inline-block;
    line-height: 42px;
  }

  ${customMedia.lessThan('laptop')`
    a{
      font-size: 28px;
      line-height: 32px;
    }
  `}
`
export const Menu = styled.div`
  a{
    font: ${font('menuLinks')};
    color: ${color('white')};
    border-bottom: 1px dotted rgb(255,255,255,.1);
    padding: 15px 0;
    display: flex;
    align-items: baseline;
    justify-content: center;
    transition: all .3s ease-out;

    :hover{
      color: ${color('red')};
      div{
        background-color: ${color('red')};
      }
    }
  }
  .active{
    color: ${color('red')};
    div{
      background-color: ${color('red')};
    }
  }

  ${customMedia.lessThan('laptop')`
    a{
      padding: 10px 0;
    }
  `}
`
export const MenuIcon = styled.div`
  width: 13px;
  height: 13px;
  margin-right: 6px;
  background-color: ${color('white')};
  -webkit-mask: ${props => `url(${props.icon}) no-repeat`};
  mask-size: contain;
  transition: all .3s ease-out;
`
export const ContactLinksTitle = styled.div`
  font: 600 13px Poppins, sans-serif;
  border-bottom: 1px dotted hsla(0,0%,100%,.1);
  color: ${color('white')};
  line-height: 40px;
`
export const ContactLink = styled.a`
  width: 32px;
  height: 32px;
  background: ${color('white')};
  margin: 10px 6px 0 0;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0.6;
  transition: all .3s ease-out;

  :hover{
    opacity: 1;
    div{
      transform: scale(1.2);
    }
  }

  :last-child{
    margin-right: 0;
  }
`
export const LinkIcon = styled.div`
  width: 15px;
  height: 15px;
  background-color: #000;
  -webkit-mask: ${props => `url(${props.icon}) no-repeat`};
  mask-size: contain;
  transition: all .2s;
`
export const Copy = styled.div`
  background-color: ${color('red')};
  padding: 20px 0;
  font: 600 12px Poppins, sans-serif;
  color: ${color('white')};
  
  ${customMedia.lessThan('laptop')`
    padding: 15px 0;
  `}
`