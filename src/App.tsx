//routes
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
//components
import {Login} from './routes/login/Login';
import { Register } from './routes/register/Register';
import {CreateScheduleContainer} from './routes/createSchedule/schedule/CreateScheduleContainer';
import {EventsFinderMain} from './routes/eventsFinder/EventsFinderMain';
import {isLogged} from './actions';
import axios from 'axios';
import {useAppDispatch} from './hooks';
//toastify
import {toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./styles/_toasts.scss";

function App() {

  const dispatch = useAppDispatch();
  const isUserLoggedIn = localStorage.getItem('user');

  if(isUserLoggedIn !== null){
    dispatch(isLogged(true));
    axios.defaults.headers.common['Authorization'] = `Basic ` + localStorage.getItem('user');
  }

  return (
    <Router>
      <ToastContainer
          position="bottom-left"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
      />
      <Switch>
        <Route path='/' exact component={EventsFinderMain}/>
        <Route path='/login' exact component={Login}/>
        <Route path='/Register' exact component={Register}/>
        <Route path='/manageSchedule' exact component={CreateScheduleContainer}/>
      </Switch>
    </Router>
  );
}

export default App;
