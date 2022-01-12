import React from 'react'
import NavBar from './NavBar'
import Home from './Home'
import About from './About'
import Shop from './Shop'
import Contact from './Contact'
import { BrowserRouter as Router, Route } from "react-router-dom"


class App extends React.Component{
    render(){
        return(
            <Router>
                <NavBar />
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route path="/shop" component={Shop} />
                <Route exact path="/contact" component={Contact} />
            </Router>
        )
    }
}

export default App