import styled from "styled-components"
import { color } from "../../constants/theme"
import { customMedia } from '../../constants/breakpoints';
import media from 'styled-media-query'
import Link from 'gatsby-link';

export const Container = styled.div`
  padding-left: 15%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  
  .name{
    position: relative;
    
    :after{
      content: "";
      position: absolute;
      top: 7px;
      left: 0;
      width: 100%;
      height: 75%;
      z-index: -1;
      background: linear-gradient(90deg,hsla(0,0%,100%,0) 0%, ${color('red')});

      ${customMedia.lessThan('mobileL')`
        display: none;
      `}
    }
  }

  ${customMedia.lessThan('tablet')`
    padding-left: 10%;
  `}

  ${media.lessThan('570px')`
    padding: 0 10px;
    align-items: center;
  `}
`
export const Button = styled(Link)`
  background: ${color('red')};
  padding: 15px 25px;
  border-radius: 4px;
  font: 600 12px Poppins, sans-serif;
  color: ${color('white')};
  text-transform: uppercase;
  letter-spacing: 4px;
  text-shadow: 1px 1px 2px hsla(0,0%,58.8%,.36);
  position: relative;
  transition: all .3s ease-out;
  
  :first-child{
    margin-right: 15px;
  }
  :hover{
    box-shadow: 0 10px 20px rgba(217,76,72,.4);
  }
  .arrow{
    border: solid #ffffff;
    border-width: 0 2px 2px 0;
    display: inline-block;
    padding: 3px;
    transform: rotate(-45deg);
    position:relative;
    margin-left: 5px;
    opacity: 1;
    
    :before{
      content: '';
      border: solid #ffffff;
      border-width: 0 2px 2px 0;
      display: inline-block;
      padding: 3px;
      opacity: 0.5;
      position: absolute;
      transform: translate(-8px, -8px);
    }
  }
  
  :hover .arrow{
    -webkit-animation:animated-arrow-1 1s ease-in-out infinite;
    animation: animated-arrow-1 1s ease-in-out infinite;
  }

  :hover .arrow:before{
    -webkit-animation: animated-arrow-2 1s ease-in-out infinite 0.1s;
    animation: animated-arrow-2 1s ease-in-out infinite 0.1s;
  }

  @-webkit-keyframes animated-arrow-1 {
    0% {transform:rotate(-45deg) translate(-20px, -20px);opacity: 0;}
    70%,100% {transform:rotate(-45deg) translate(0px, 0px);opacity: 1;}
  }
  @keyframes animated-arrow-1 {
    0% {transform:rotate(-45deg) translate(-20px, -20px);opacity: 0;}
    70%,100% {transform:rotate(-45deg) translate(0px, 0px);opacity: 1;}
  }

  @-webkit-keyframes animated-arrow-2{
    0% {transform:translate(-20px, -20px);opacity: 0;}
    70%,100% {transform:translate(-8pxpx, -8px);opacity: 0.5;}
  }
  @keyframes animated-arrow-2 {
    0% {transform:translate(-20px, -20px);opacity: 0;}
    70%,100% {transform:translate(-8pxpx, -8px);opacity: 0.5;}
  }

  ${customMedia.lessThan('tablet')`
    padding: 12px 18px;
    font-size: 10px;
  `}
`
export const TypingText = styled.div`
  background: rgba(0,0,0,.5);
  padding: 10px 20px;
  margin: 20px 0;
  width: max-content;

  span{
    border-right: 2px solid;
    color: #E8E8E8;
    font: 16px monospace;
    text-transform: uppercase;
    overflow: hidden; 
    white-space: nowrap; 
    letter-spacing: 2px; 
    display: inline-block;
  }

  span {
    -webkit-animation: animated-text 3.5s steps(29, end) 0.5s infinite alternate both,
                      animated-cursor 600ms steps(29,end) infinite;
    animation: animated-text 3.5s steps(29, end) 0.5s infinite alternate both,
              animated-cursor 600ms steps(29,end) infinite;
  }

  @-webkit-keyframes animated-text{
    from{width: 0;}
    to{width: 105%;}
  }

  @keyframes animated-text{
    from{width: 0;}
    to{width: 105%;}
  }

  @-webkit-keyframes {
    from{border-right-color: #E8E8E8;}
    to{border-right-color: transparent;}
  }

  @keyframes animated-cursor{
    from{border-right-color: #E8E8E8;}
    to{border-right-color: transparent;}
  }

  ${customMedia.lessThan('tablet')`
    padding: 7px 15px;
  `}
`