import React, { Component } from 'react';
import * as d3 from 'd3';
import styled from 'styled-components';

const StyledText = styled.text`
text-anchor: middle;
fill: white;
`

function translate(x,y){
    return `translate(${x},${y})`

}

const Slice =({value, fill, innerRadius = 0,outerRadius})=>{
    let arc = d3.arc().innerRadius(innerRadius).outerRadius(outerRadius)
    return(
        <g>
            <path d={arc(value)} fill={fill} />
            <StyledText dy="0.35em" transform={translate(...arc.centroid(value))}>
                {
                    value.data
                }
            </StyledText>
        </g>
    )
}

export class PieChart extends Component {
    state={
        data: [6, 4, 7, 1, 1, 3, 4, 9],
        color: ["black","green","red","orange","blue","pink","gray","violet"],
    }

    render() {
        let width = window.innerWidth;
        let height = window.innerHeight;
        let minViewportSize = Math.min(width, height);
        let radius = (minViewportSize * .9) / 2;
        let x = width / 2;
        let y = height / 2;
        const { data } = this.state;
        const pie= d3.pie();
        return (
        <div style={{height:"100vh"}}>
           <svg width="100%" height="100%">
                <g transform={translate(x,y)}>
                    {
                        pie(data).map((value,i)=>{
                            return <Slice value={value} key={i} fill={this.state.color[i]} outerRadius={radius} />
                        })
                    }
                </g>
           </svg>
        </div>
        )
    }
}
