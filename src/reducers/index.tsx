import monthDateReducer from './scheduleDate';

import {combineReducers} from 'redux';


export const rootReducer = combineReducers({
    monthDateReducer
})

export type RootState = ReturnType<typeof rootReducer>