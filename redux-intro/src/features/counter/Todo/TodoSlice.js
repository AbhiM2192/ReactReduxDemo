import {createSlice} from '@reduxjs/toolkit';


let TodoId = 1;
export const TodoSlice =createSlice({
    name:'Todo',
    initialState:[],
    reducers:{
        create:(state,action) =>{
            const {payload} = action;
            state.push({
                id: TodoId,
                descp : payload,
                isComplete:false
            })
            TodoId++
        },
        edit:(state,action) =>{
            const {id,dec} = action.payload;
            const TodoEdit = state.find(s =>s.id === id);
            if(TodoEdit){
                TodoEdit.descp = dec
            }
        },
        toggleComplete:(state,action) =>{
            const {payload} = action;
            const TodotoToggle = state.find(s => s.id === payload);
            if(TodotoToggle){
                TodotoToggle.isComplete = !TodotoToggle.isComplete;
            }
        },
        remove:(state,action) =>{
            const {payload} = action;
            const index = state.findIndex(s => s.id === payload);
            if(index !== -1){
                state.splice(index,1);
            }
        }
    }
});

export const {create,edit,toggleComplete,remove} = TodoSlice.actions
export default TodoSlice.reducer;