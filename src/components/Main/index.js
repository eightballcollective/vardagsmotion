import React from 'react'
import './styles.css'
import Sidebar from '../Sidebar'
import Content from '../Content'
import data from '../../resources/data'

function Main () {
  return (
    <div className='main'>
      <Sidebar data={data}/>
      <Content/>
    </div>
  )
}

export default Main
