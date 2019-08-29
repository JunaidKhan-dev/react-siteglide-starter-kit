import React from 'react'
import imgUrlGen from './../../utils/imgUrlGen'
const Home = () => {
  return (
    <div className='container'>
      <h1>Home Page</h1>
      <img src={imgUrlGen('dont-delete.png')} alt='' className='w-25' />
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati provident eligendi tempore laboriosam nesciunt explicabo dicta! Possimus voluptatum excepturi, corporis cum facilis consectetur labore nostrum non ex doloribus distinctio omnis.</p>
    </div>
  )
}

export default Home
