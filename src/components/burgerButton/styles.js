import styled from 'styled-components';
import { color } from '../../constants/theme';
import { customMedia } from '../../constants/breakpoints';

export const BurgerWrapper = styled.div`
  display: none;

  ${customMedia.lessThan('laptop')`
    display: block; 
  `}
`;
export const Burger = styled.button`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 2rem;
    width: 2rem;
    padding: 0;
    z-index: 10;
    position: absolute;
    right: 0;
    transform: translate(-100%, 100%);

    span {
        width: 2rem;
        height: 0.2rem;
        background: ${color('red')};
        transition: all 0.3s linear;
        transform-origin: 1px;

        :first-child {
            transform: ${({ isOpen }) => (isOpen ? 'rotate(45deg)' : 'rotate(0)')};
        }

        :nth-child(2) {
            opacity: ${({ isOpen }) => (isOpen ? '0' : '1')};
            transform: ${({ isOpen }) => isOpen ? 'translateX(20px)' : 'translateX(0)'};
        }

        :nth-child(3) {
            transform: ${({ isOpen }) => (isOpen ? 'rotate(-45deg)' : 'rotate(0)')};
        }
    }
`;