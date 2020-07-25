import React,{useState} from 'react';
import {useSelector,useDispatch} from 'react-redux';

import {create,edit,toggleComplete,remove} from './TodoSlice';
import Card from './Card'
import styled from 'styled-components'

const Title = styled.h1`
                color: blue;
                font-size:2rem;
                text-align:center;
                border:${(props) => props.solid ? '1px solid green' : '2px solid blue'};
                `;

const Wrapper = styled.div`
                display:flex;
                flex-direction:row;
                flex-wrap:wrap;
                justify-content:space-evenly;
                align-items:baseline
                width:500px;
                min-height:500px;
                border:2px solid red;
                margin 0 auto
`;
function Todo() {
    const [inputText,setInputText] = useState('')
    const todos = useSelector(state => state.todo);
    const dispatch = useDispatch()
    const handleSubmit = (e) =>{
        e.preventDefault();
        dispatch(create(inputText))
        setInputText('')
    }
    const handleDel = (id,done) =>{
        if(done){
            dispatch(remove(id));
        }
    }
    console.log('tods',todos)
    const MarkComp = (id) =>{
        console.log('clicked',id)
        dispatch(toggleComplete(id))
    }
    return (
        <>
           <Title solid>Hello From react redux</Title>
            <form onSubmit={handleSubmit}>
                <input 
                type='text' 
                value={inputText} 
                onChange={(e) => setInputText(e.target.value)} 
                />
                <button type='submit'>Add Todo</button>
            </form>
            <Wrapper>
            {
                todos.map((todo) => {
                    return <Card 
                            key={todo.id}
                            desc={todo.descp} 
                            done={todo.isComplete} 
                            markComp={MarkComp} 
                            id={todo.id}
                            del={handleDel}
                            />
                })
                
            }
            </Wrapper>
        </>
    )
}

export default Todo
