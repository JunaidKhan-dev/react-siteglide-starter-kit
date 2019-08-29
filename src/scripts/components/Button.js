import React from 'react'
import axios from 'axios'

const onCLickHandler = () => {
  const getClient = async () => {
    try {
      let res = await axios.get('api/get_client_list')
      console.log(res.data)
    } catch (error) {

    }
  }

  getClient()
  console.log('button is clicked')
}

const Button = (props) => {
  return (
    <div>
      <button className='btn btn-warning' onClick={onCLickHandler}>click {props.name }</button>
    </div>
  )
}

export default Button
