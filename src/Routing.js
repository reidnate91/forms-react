import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import NameForm from "./App.js"
import Member from "./Components/notamember"

class RouterPage extends React.Component {
    render() {
        return (
            
<Router>
  <div>
    <Route exact path="/" component={NameForm}/>
    <Route path="/notamember" component={Member}/>
  </div>
</Router>


        )
    }
}



export default RouterPage