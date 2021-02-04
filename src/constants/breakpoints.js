import { generateMedia } from 'styled-media-query';

export const customMedia = generateMedia({
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '425px',
    tablet: '768px',
    laptop: '1024px',
    laptopM: '1300px',
    laptopL: '1440px',
    desktop: '2560px'
});