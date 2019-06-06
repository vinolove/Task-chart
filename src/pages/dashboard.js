import React, { Component } from 'react';
import { Button, Label } from '../components';
import styled from 'styled-components';

const OuterContainer = styled.div`
    display: flex;
    height: 100vh;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export class Dashboard extends Component {
    state={
        count: 0
    }
    incrementCount =() =>{
        this.setState(prevState=>({
            count: prevState.count + 1
        }))
    }

    decrementCount = () =>{
        this.setState(prevState=>({
            count: prevState.count - 1
        }))
    } 

    render() {
        const { count } = this.state;
        return (
            <OuterContainer>
                <Label id="count-label">
                    {count}
                </Label>
                <div style={{display:"flex"}}>
                    <Button id="+" onClick={this.incrementCount}>+</Button>
                    <div style={{width:"1rem"}} />
                    <Button id="-" onClick={this.decrementCount}>-</Button>
                </div>
            </OuterContainer>
        )
    }
}
