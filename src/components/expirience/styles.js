import styled from 'styled-components'
import { color, font } from '../../constants/theme'
import { customMedia } from '../../constants/breakpoints';

export const Container = styled.div`
    background: ${color('white')};
    padding-bottom: 100px;
`
export const ExpirienceSection = styled.div`
    width: 85%;
    margin: 0 auto;
    padding: 50px 60px;
    box-shadow: 0 0 30px rgba(0,0,0,.2);
    border-left: 4px solid ${color('red')};

    div{
        position: relative;  
        margin-bottom: 50px;
        
        :last-child{
            margin-bottom: 0;
        }

        :after{
            content: '';
            position: absolute;
            left: -72px;
            background: ${color('white')};
            top: 5px;
            border-radius: 50%;
            border: 5px solid ${color('red')};
            width: 20px;
            height: 20px;
            
            ${customMedia.lessThan('tablet')`
                left: -37px;
            `}

        }
    }
    h4{
        font: ${font('expirienceBlockTitle')};
        letter-spacing: 1px;
        text-transform: uppercase;
        color: ${color('darkGrey')}; 
    }
    h5{
        font: ${font('expirienceBlockSubtitle')};
        margin: 15px 0;
        text-transform: uppercase;
        color: ${color('darkGrey')};
        span{
            color: ${color('red')};
        }
    }
    ul{
        margin: 0;
        list-style-position: inside;
        
        li{
            font: 500 16px Poppins, sans-serif; 
            color: #454545;
            margin-bottom: 6px;
        }  
    } 
    
    ${customMedia.lessThan('tablet')`
        padding-right: 15px;
        padding-left: 25px;

        h4{
           font-size: 16px;
        }
    `}
`