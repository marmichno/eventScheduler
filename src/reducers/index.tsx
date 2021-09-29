import scheduleDateReducer from './schedule/scheduleDate';
import scheduleTypeReducer from './schedule/scheduleType';
import eventTypeReducer from './events/eventType';

import {combineReducers} from 'redux';


export const rootReducer = combineReducers({
    scheduleDateReducer,
    scheduleTypeReducer,
    eventTypeReducer
})

export type RootState = ReturnType<typeof rootReducer>