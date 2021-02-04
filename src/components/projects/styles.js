import styled from 'styled-components'
import { color, font } from '../../constants/theme'
import Github from '../../images/github.svg'
import { customMedia } from '../../constants/breakpoints';
import media from 'styled-media-query'

export const ProjectsItems = styled.div`
    display: flex;
    justify-content: space-between;
    width: 92%;
    margin: 0 auto;
    
    .gatsby-image-wrapper{
        z-index: 2;
        transition: all .35s ease-out;

        :hover{
            opacity: 0.1;  
        }
    }

    ${customMedia.lessThan('laptop')`
        flex-direction: column;
        align-items: center;
        margin-bottom: 60px;
    `}
`
export const Project = styled.a`
    width: 32%;
    background: linear-gradient(45deg,#ff89e9,#05abe0);
    overflow: hidden;
    border-radius: 12px;
    position: relative;
    cursor: pointer;
    z-index: 0;
    
    :hover{
        figcaption{
            z-index: 1;
        }
        p{
            transform: translateX(0); 
        }
        a{
            transform: translateX(0);
        }
    }

    ${customMedia.lessThan('laptop')`
        width: 50%;
        margin-bottom: 17px;
    `}
    ${customMedia.lessThan('tablet')`
        width: 65%;
    `}
    ${media.lessThan('580px')`
        width: 80%;
    `}
`
export const ProjectInfo = styled.figcaption`
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    padding: 25px;
    color: ${color('white')};
    letter-spacing: 1px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    z-index: -1;
    
    h5{
        font: ${font('projectTitle')};
    }
    a{
        width: 25px;
        height: 25px;
        margin-right: 6px;
        background-color: ${color('white')};
        -webkit-mask: url(${Github}) no-repeat;
        mask-size: contain;
        transform: translateX(-150%);
        transition: all .3s ease-out;
    }
    p{
        font: ${font('projectText')};
        margin-bottom: 0;
        padding: 0 10px;
        border-right: 4px solid ${color('white')};
        transform: translateX(150%);
        transition: all .3s ease-out;
    }
`