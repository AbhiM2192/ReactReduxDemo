import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import tododReducer from '../features/counter/Todo/TodoSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
    todo:tododReducer
  },
});
