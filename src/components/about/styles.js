import styled from 'styled-components'
import { color, font } from '../../constants/theme'
import { customMedia } from '../../constants/breakpoints';

export const Container = styled.div`
    background: ${color('white')}; 
`
export const AboutBlock = styled.div`
    display: flex;
    
    ${customMedia.lessThan('laptop')`
        flex-direction: column;
        align-items: center;
    `}
`
export const Img = styled.div`
    width: 45%;
    
    ${customMedia.lessThan('laptop')`
        width: 60%;
    `}

    ${customMedia.lessThan('mobileL')`
        width: 80%;
    `}
`
export const AboutInfo = styled.div`
    width: 48%;
    padding-left: 20px;
    h5{
        font: ${font('aboutSubtitle')};
        text-transform: uppercase;
        letter-spacing: 3px;
        color: ${color('grey')};
        margin: 20px 0 10px;
    }
    h2{
        font: ${font('aboutTitle')};
        color: ${color('aboutTitle')};
        margin-bottom: 40px;
        position: relative;
        text-transform: capitalize;
        span{
            color: ${color('red')};
        }
        :after{
            content: "";
            height: 2px;
            width: 100px;
            position: absolute;
            bottom: -20px;
            left: 0;
            border: 1px dashed ${color('red')};
        } 
        ${customMedia.lessThan('tablet')`
            font-size: 28px;
        `}
        ${customMedia.lessThan('mobileL')`
            font-size: 24px;
        `}
    }
    p{
        font: ${font('aboutText')};
        margin-bottom: 15px;
        color: ${color('darkGrey')};
        line-height: 26px;
        margin-bottom: 15px;
        span{
            font: 800 15px Poppins-Bold,sans-serif;
        }
    }

    ${customMedia.lessThan('laptop')`
        width: 80%;
        padding-left: 0;
    `}
`
export const Form = styled.div`
    background: ${color('mainBackground')};
    padding: 15% 40px 100px;
    -webkit-clip-path: polygon(0 10%,100% 20%,100% 70%,100% 100%,0 101%);
    clip-path: polygon(0 10%,100% 20%,100% 70%,100% 100%,0 101%);

    h5{
        font: ${font('formTitle')};
        color: ${color('white')};
        position: relative;
        margin-bottom: 40px;
        line-height: 30px;
        letter-spacing: 2px;
        margin-top: 30px;
        
        :after{
            content: "";
            height: 2px;
            width: 100px;
            position: absolute;
            bottom: -20px;
            left: 0;
            border: 1px dashed ${color('red')}; 
        }
    }

    p{
        color: ${color('formText')};
        font: 300 14px Poppins, sans-serif;
        line-height: 26px;
    }

    form{
        box-shadow: 0 0 30px rgba(0,0,0,.2);
        border-radius: 5px;
        padding: 38px;

        .input{
            margin-bottom: 40px;
            position: relative;
            overflow: hidden;
            display: flex;

            input,textarea{
                width: 100%;
                border-bottom: 2px solid rgb(255,255,255,.1);
                padding-bottom: 10px;
                transition: all .4s ease-out;
                font: ${font('inputText')};
                color: ${color('formText')};
                resize: none;
            }
            span{
                display: block;
                width: 100%;
                height: 2px;
                background: ${color('red')};
                position: absolute;
                bottom:0;
                transition: all .5s ease-out;
            }
        }
        button{
            background: ${color('red')};
            padding: 17px 25px;
            border-radius: 4px;
            font: 600 12px Poppins, sans-serif;
            color: ${color('white')};
            text-transform: uppercase;
            letter-spacing: 4px;
            text-shadow: 1px 1px 2px hsla(0,0%,58.8%,.36);
            transition: all .3s ease-out;
            
            :hover{
                transform: translate(10px, -10px);
                box-shadow: 0 10px 20px rgba(217,76,72,.4);
            }
        }
    }

    ${customMedia.lessThan('laptop')`
        -webkit-clip-path: polygon(0 10%,100% 15%,100% 70%,100% 100%,0 101%);
        clip-path: polygon(0 10%,100% 15%,100% 70%,100% 100%,0 101%);
    `}

    ${customMedia.lessThan('tablet')`
        padding: 7% 30px 40px;
        h5{
            font-size: 28px;
            padding-top: 60px;
        }
        form button{
            padding: 15px 18px;
            font-size: 10px;
        }
    `}

    ${customMedia.lessThan('mobileL')`
        h5{
            font-size: 24px;
        }
    `}
`