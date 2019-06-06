import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.div`
    height: 40px;
    width: 150px;
    background: #2ecc71;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-size: 2rem;
    cursor: pointer;
`


export const Button = ({onClick,...rest}) =>{
    return <StyledButton onClick={onClick} {...rest} />
}