import Styled from "styled-components"
import { FcEmptyTrash, FcCheckmark } from "react-icons/fc";

export const Container = Styled.div`
    background: linear-gradient(90deg, #383838 0%, #000000 81.25%);
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const ToDolist = Styled.div`
background: white;
padding: 30px 20px;
border-radius: 10px;


ul{
    padding: 0;
    margin-top: 60px:
}
`

export const Input = Styled.input`
border: 2px  solid rgba(209, 211, 212, 0.4);

border-radius: 5px;
height: 40px;
margin-right: 40px;
width: 340px;
`
export const Button = Styled.button`
background:#8052EC;
border-radius: 5px;
border: none;
font-weight: 900;
font-size: 17px;
line-height: 2px;
height: 40px;
color: white;
width: 130px;
cursor: pointer;

&:hover{
    opacity: 0.8;
}

&:active{
    opacity: 0.6;
}
`
export const ListItem = Styled.div`

border-radius: 5px;
background: ${props => props.isFinished ? '#E8FF8B' : '#E4E4E4'};
box-shadow: 1px 4px 10px 0px rgba(0, 0, 0, 0.20);
height: 60px;
display: flex;
align-items: center;
justify-content: space-between;
margin-bottom: 30px;
padding: 0 20px;
width: 500px;

li{
    list-style: none;
}

`
export const Trash = Styled(FcEmptyTrash)`
cursor: pointer;
`

export const Check = Styled(FcCheckmark)`
cursor: pointer;
`





