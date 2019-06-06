import React from 'react';
import styled from 'styled-components';


const StyledLabel = styled.div`
    height: 40px;
    width: 200px;
    font-size: 2rem;
    font-weight: 600;
    color: #333;
`

export const Label =({children,...rest})=>{
    return <StyledLabel {...rest}>{children}</StyledLabel>
}