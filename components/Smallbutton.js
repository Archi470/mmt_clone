'use client';

import styled from 'styled-components'

export const Smallbutton = styled.div`
border: 0.01em  solid darkblue;
border-style: dashed;
width:180px;
padding: 5px;
height:35px;
display: grid;
grid-template-columns: 20% auto;
color: white;
grid-gap: 10px;
position: relative;
right: 80px;
top: -5px;
h4{
    font-size:12px;
    position:relative;
    padding-left: 3px;
}
p{font-size:9px;
position:relative;
padding-left: 3px;
}
img{
    padding-left: 3px;
    width:90%;}
`
export default Smallbutton;