import styled from 'styled-components'
export const Fromtocss = styled.div`
height: 85px;
width: 95%;
margin: auto;
border: 0.01em solid #d4d0d0;
border-radius: 8px;
display: grid;
grid-template-columns: 1fr 1fr;
.fromtodiv {
    display:grid;
    grid-template-columns: 1fr 1fr;
    height: 100%;
}
h3{
    color : black;
    position : relative;
    left: 12px;
    font-size: 16px;
    font-weight: 500;
}
.fromtodiv div{
    border-right: 0.01em solid #d4d0d0;
    height:100%;
}

.fromtodiv2 {
    display:grid;
    grid-template-columns: 1fr 1fr 1fr;
    height: 100%;
}
.date{
    margin-top:9px;
    border:none;
    font-size: 16px;
    margin-left: 10px;
}
.fromtodiv2 div{
    border-right: 0.01em solid #d4d0d0;
    height:100%;
}
.fromtodiv2 select {
    padding:4%;
    width:100%;
    font-size:16px;
    border: none;
    position : relative;
}
`
export default Fromtocss;