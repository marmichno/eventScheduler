import scheduleDateReducer from './schedule/scheduleDate';
import scheduleTypeReducer from './schedule/scheduleType';
//events management
import eventTypeReducer from './eventsManagement/eventType';
import popupEventTypeReducer from './eventsManagement/popupEventType';
import showEventPopupReducer from './eventsManagement/showEventPopup';
import isLoggedReducer from './isLogged/isLogged';
import showNavbarReducer from './navbar/showNavbar';
import {combineReducers} from 'redux';


export const rootReducer = combineReducers({
    isLoggedReducer,
    showNavbarReducer,
    scheduleDateReducer,
    scheduleTypeReducer,
    eventTypeReducer,
    popupEventTypeReducer,
    showEventPopupReducer,
})

export type RootState = ReturnType<typeof rootReducer>