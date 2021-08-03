import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { handleInitialData } from '../actions/shared'
import LoadingBar from 'react-redux-loading';
import SignIn from './SignIn/SignIn';
import { Route, Switch } from 'react-router-dom';

import NavBar from './NavBar';
import ProtectedRoute from './ProtectedRoute';
import 'bootstrap/dist/css/bootstrap.min.css';

import  Home from './Home/Home.js';
import QuestionDetails from './QuestionDetails/QuestionDetails';
import AddQuestion from './AddQuestion/AddQuestion';
import Leaderboard from './Leaderboard/Leaderboard';
import AboutUs from './AboutUs/AboutUs';
import NotFound from './NotFound/NotFound';





const App = ({match}) => {
  
  const dispatch = useDispatch()

  const loadingBar =  useSelector(state => state.loadingBar)
  
  
  
  console.log(match)
  useEffect(() => {
    dispatch(handleInitialData())
   // eslint-disable-next-line  react-hooks/exhaustive-deps 
  }, [])



 

  
  return (

      <div >
    
         

       
        <div >
          <NavBar />
            <LoadingBar style={{position:'fixed', top:70}}/>
            <Switch> 
              <ProtectedRoute exact path="/" component={Home} />
              <ProtectedRoute exact path="/question/:id" component={QuestionDetails} />
              <ProtectedRoute exact path="/leaderboard" component={Leaderboard} />
              <ProtectedRoute exact path="/add" component={AddQuestion} />
              <Route exact path="/aboutus" component={AboutUs}/> 
              {loadingBar.default === 0 && (
                  
                  <Route exact path="/login" component={SignIn}/>
                  
              )}

              {loadingBar.default === 0 && (
                  
                <Route component={NotFound}/>
                  
              )}

              

            
            
            </Switch>
          
        </div>
       
      
      </div>
  );
}

export default App;
