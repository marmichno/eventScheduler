import monthDateReducer from './scheduleDate';
import scheduleTypeReducer from './scheduleType';

import {combineReducers} from 'redux';


export const rootReducer = combineReducers({
    monthDateReducer,
    scheduleTypeReducer
})

export type RootState = ReturnType<typeof rootReducer>