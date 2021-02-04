import styled from 'styled-components';
import { font, color } from '../../constants/theme';
import { customMedia } from '../../constants/breakpoints';
import media from 'styled-media-query'

export const HomePageTitle = styled.h1`
    font: ${font('mainTitle')};
    color: ${color('white')};
    letter-spacing: 0.5px;
    line-height: 1.2;

    ${customMedia.lessThan('tablet')`
        font-size: 34px;
    `}
    ${media.lessThan('570px')`
        font-size: 28px;
        text-align: center;
    `}
`;

export const PageHeading = styled.h2`
  font: ${font("pageHeading")};
  color: ${props => (props.color ? color(props.color) : color('darkGrey'))};
  text-transform: uppercase;
  letter-spacing: 1px;
  position: relative;
  text-align: center;
  padding-top: 60px;
  margin-bottom:80px;

    :before{
        content: '${props => (props.content ? (props.content) : 'about me')}';
        position: absolute;
        opacity: 0.05;
        font-size: 70px;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -20%);
        white-space: nowrap;
    }

    ${customMedia.lessThan('tablet')`
        font-size: 34px;
        padding-top: 90px;
        margin-bottom: 50px;
        :before{
            font-size: 40px;
            transform: translate(-50%,15%);
        }
    `}
`

