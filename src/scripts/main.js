import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import 'regenerator-runtime/runtime'

import context from './../utils/context'
// for getting context use below function
let res = async () => {
  let response = await context()
  console.log(response)
  return response.data
}
res()

ReactDOM.render(<App />, document.getElementById('app'))
