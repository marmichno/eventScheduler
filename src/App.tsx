//variables, mixins
import './styles/index.scss'
//routes
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
//components
import {CreateMonthScheduleContainer} from './routes/createMonthSchedule/CreateMonthScheduleContainer';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={CreateMonthScheduleContainer}/>
      </Switch>
    </Router>
  );
}

export default App;
