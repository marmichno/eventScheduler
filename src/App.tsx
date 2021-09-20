//routes
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
//components
import {CreateScheduleContainer} from './routes/createSchedule/schedule/CreateScheduleContainer';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={CreateScheduleContainer}/>
      </Switch>
    </Router>
  );
}

export default App;
