import React from 'react'
import styled from 'styled-components'
const StyledCard = styled.div`
                border:1px solid #e6b247;
                background-color:${(props) => props.done ? 'pink' : '#ffd183'};
                color:white;
                font-size:2rem;
                display:flex;
                flex-flow: column wrap;
                align-content:center;
                min-width:200px;
                height:200px;
                border-radius:5px;
                `;
const Button = styled.button`
                width:150px;
                height:40px;
                background-color:white;
                &:hover{
                    background-color:#e6b247;
                    color:white;
                };
                border: 1px solid #e6b247;
                font-weight:bold;
                border-radius:5px;
                color:#e6b247;
                margin:30px auto;
`;
function Card(props) {
    const {desc , id,done} = props
    const text = done ? 'Unmark' :'Mark Complete';
    return (
        <StyledCard {...props}>
           Task {id} -{desc}
             
            {done ? <Button onClick={() => props.del(id,done)}>Delete</Button> : <Button onClick={ () => props.markComp(id)}>{text}</Button>}
        </StyledCard>
    )
}

                    

export default Card
