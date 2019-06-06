import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Dashboard, PieChart, BarChart, LineChart } from './pages'

const App = () =>{
  return(
    <div style={{height:"100vh"}}>
      <BrowserRouter>
        <Switch>
            <Route exact path='/dashboard' component={Dashboard} />
            <Route exact path='/pie-chart' component={PieChart} />
            <Route exact path='/bar-chart' component={BarChart} />
            <Route exact path='/line-chart' component={LineChart} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App;
