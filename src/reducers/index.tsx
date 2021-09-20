import scheduleDateReducer from './scheduleDate';
import scheduleTypeReducer from './scheduleType';

import {combineReducers} from 'redux';


export const rootReducer = combineReducers({
    scheduleDateReducer,
    scheduleTypeReducer
})

export type RootState = ReturnType<typeof rootReducer>