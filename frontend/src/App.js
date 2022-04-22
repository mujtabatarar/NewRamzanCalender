import './App.css';
import React, {Fragment} from 'react';
import Today from './Components/Today';
import Month from './Components/Month';

function App() {

  return (
      <Fragment>
       <Today/>
       <Month/>
    </Fragment>
  );
}
export default App;

