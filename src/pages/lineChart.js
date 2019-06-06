import React from 'react';
import * as d3 from 'd3';
import styled from 'styled-components';

const StyledLine = styled.line`
  stroke: red;
`

const StyledText = styled.text`
  fill: #000;
  fill-opacity: 0.9;
  font-size: 12px;
  text-anchor: middle;
`

const GridLine = styled.line`
  opacity: 0.2;
  stroke: #000;
`


export class LineChart extends React.Component {
  state={
    width: window.innerWidth,
    height: window.innerHeight,
    margin: 20,
    data: [
      {a: 1, b: 3},
      {a: 2, b: 6},
      {a: 3, b: 2},
      {a: 4, b: 12},
      {a: 5, b: 8}
    ]
  }
    render() {
      const {data, width, height, margin} = this.state
      const h = height - 2 * margin, w = width - 2 * margin
  
      const xFormat = d3.format('.2')
      
      //x scale
      const x = d3.scaleLinear()
        .domain(d3.extent(data, d => d.a))
        .range([margin, w])
      
      //y scale
      const y = d3.scaleLinear()
        .domain([0, d3.max(data, d => d.b)]) 
        .range([h, margin])
      
      const line = d3.line()
        .x(d => x(d.a))
        .y(d => y(d.b))
        .curve(d3.curveCatmullRom.alpha(0.5)) //curve line

      x.ticks(4).map(d=>{
        console.log('d',d)
      })
       
      const xTicks = x.ticks(6).map(d => (
          x(d) > margin && x(d) < w ? 
            <g transform={`translate(${x(d)},${h + margin})`}>  
              <StyledText>{xFormat(d)}</StyledText>
              <StyledLine x1='0' x1='0' y1='0' y2='5' transform="translate(0,-20)"/>
              <GridLine   y1='0' y2={-(h-margin)} x1='0' x2='0' transform="translate(0,-20)"/> 
            </g>
          : null
      ))
  
      const yTicks = y.ticks(5).map(d => (
          y(d) > 10 && y(d) < h ? 
            <g transform={`translate(${margin},${y(d)})`}>  
              <StyledText x="-12" y="5">{xFormat(d)}</StyledText>
              <StyledLine x1='0' x1='5' y1='0' y2='0' transform="translate(-5,0)"/>
              <GridLine   x1='0' x1={w - margin} y1='0' y2='0' transform="translate(-5,0)"/> 
            </g>
          : null
      ))
  
      return  (
        <svg fill="#fff" fillOpacity="0.3" width={width} height={height}>
           <StyledLine  x1={margin} x2={w} y1={h} y2={h}/>
           <StyledLine  x1={margin} x2={margin} y1={margin} y2={h}/>
           <path stroke="steelblue" d={line(data)}/>
           <g>
             {xTicks}
           </g>
           <g>
             {yTicks}
           </g>
        </svg>
      )
    }
  }
