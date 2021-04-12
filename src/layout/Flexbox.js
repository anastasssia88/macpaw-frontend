import React from 'react'
import styled from 'styled-components';

const Flexbox = ({children, col, jusCenter, jusStart}) => {
    return (
        <Wrapper col={col} jusCenter={jusCenter} jusStart={jusStart} >
            {children}
        </Wrapper>
    )
}

export default Flexbox

const Wrapper = styled.div`
    display: flex;
    flex-direction: ${props => props.col ? 'column' : 'row'};
    justify-content: ${props => props.jusCenter && 'center'};
    justify-content: ${props => props.jusStart && 'flex-start'};
    align-items: ${props => props.alCenter && 'center'};

`