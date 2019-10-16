import React from 'react';
import Nav from './Components/Nav';
import Home from './Components/Home';
import Projects from './Components/Projects'
import Types from './Components/Types'
import { makeStyles } from '@material-ui/styles';
import './style.css';

const useStyles = makeStyles({
  root: {
    width: '1438px',
    margin: '0 auto',
    
  }
});

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Nav />
      <Home />
      <Projects />
      <Types />
    </div>
  );
}

export default App;
