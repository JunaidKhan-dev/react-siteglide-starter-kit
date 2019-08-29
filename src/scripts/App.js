import React, { Component } from 'react'
import {HashRouter,Route, Switch} from 'react-router-dom'

import appStyle from './../css/appStyle'
import imgUrl from './../utils/imgUrlGen'
import Navbar from './components/Navbar'
import Button from './components/Button'
import AddNinja from './components/AddNinja'
import About from './components/About'
import Contact from './components/Contact'
import Home from './components/Home'

class App extends Component {
  state= {
    ninjas : [
      {name: 'ryu', age:32, belt:'black', id: 1},
      {name: 'ken', age:22, belt:'brown', id: 2},
      {name: 'chunli', age:42, belt:'red', id: 3}
    ]
  }
  addNinja=(newNinja)=>{
    newNinja.id = Math.random()
  
    this.setState({
      ninjas : [...this.state.ninjas, newNinja]
    })
  }
  delNinja=(e, id)=>{
   let filterArray = this.state.ninjas.filter( ninja => {
     return ninja.id !== id
   })

   this.setState({
    ninjas: filterArray
   })
  }

  /* componentDidMount () {
    console.log('component mounted')
  }

  componentDidUpdate (prevProps, prevState) {
    console.log('component Did Update')
    console.log(prevProps,prevState)
  } */ 

  render () {
  
    return (
      
      <HashRouter>
        <Navbar />
        <Switch>
        <Route  exact path='/'  component={Home} />
        <Route exact path='/about' component={About} />
        <Route exact path='/contact' component={Contact} />
        <Route exact path='/add' component={AddNinja} />
        </Switch>
      </HashRouter>
      
    )
  }
}

export default App
