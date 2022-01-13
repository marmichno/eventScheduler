import scheduleDateReducer from './schedule/scheduleDate';
import scheduleTypeReducer from './schedule/scheduleType';
//events management
import allUserEventsReducer from './eventsManagement/allUserEvents';
import eventTypeReducer from './eventsManagement/eventType';
import popupEventTypeReducer from './eventsManagement/popupEventType';
import showEventPopupReducer from './eventsManagement/showEventPopup';
import isLoggedReducer from './isLogged/isLogged';
import showNavbarReducer from './navbar/showNavbar';
import chooseEventIdReducer from './eventsManagement/chooseEventId';
import selectedUserEventReducer from './eventsManagement/selectedEvent';
//event finder
import filterEventsMainReducer from './eventFinder/filterEventsMainReducers';
import selectEventEventFinderReducer from './eventFinder/selectEventEventFinder';
import selectEventTypeEventFinderReducer from './eventFinder/selecetEventTypeEventFinder';
//common
import {combineReducers} from 'redux';


export const rootReducer = combineReducers({
    isLoggedReducer,
    showNavbarReducer,
    scheduleDateReducer,
    scheduleTypeReducer,
    eventTypeReducer,
    popupEventTypeReducer,
    showEventPopupReducer,
    chooseEventIdReducer,
    selectEventEventFinderReducer,
    selectEventTypeEventFinderReducer,
    allUserEvents: allUserEventsReducer,
    selectedUserEvent: selectedUserEventReducer,
    filterEventsMain: filterEventsMainReducer
})

export type RootState = ReturnType<typeof rootReducer>