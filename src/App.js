import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation';
import Completedtask from './components/Completedtask';
import List from './components/List';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
  	<Router>
	    <div className="App">
	      	<div className="container">
	      		<Navigation />
	      		<Switch>
	   			<Route path="/" exact component={List}/>
	   			<Route path="/completed" component={Completedtask}/>
	   			</Switch>
	    	</div>
	    </div>
    </Router>
  );
}

export default App;
