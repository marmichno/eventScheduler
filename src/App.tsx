//routes
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
//components
import {CreateScheduleContainer} from './routes/createSchedule/schedule/CreateScheduleContainer';
import {EventsFinderMain} from './routes/eventsFinder/EventsFinderMain';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={EventsFinderMain}/>
        <Route path='/manageSchedule' exact component={CreateScheduleContainer}/>
      </Switch>
    </Router>
  );
}

export default App;
