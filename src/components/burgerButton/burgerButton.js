import React from 'react';
import { BurgerWrapper, Burger } from './styles';

const BurgerButton = ({isOpen, setIsOpen}) => {
    return (
        <BurgerWrapper onClick={e => setIsOpen(!isOpen)}>
            <Burger isOpen={isOpen}>
                <span />
                <span />
                <span />
            </Burger>
        </BurgerWrapper>
    );
};

export default BurgerButton;