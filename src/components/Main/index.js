import React from 'react'
import './styles.css'
import Sidebar from '../Sidebar'
import Content from '../Content'
import data from '../../resources/data'

function Main () {
  return (
    <div className='main'>
      <Sidebar data={data}/>
      <Content title='Motion 123' date='2017' summary='En sammanfattning' href='#'/>
    </div>
  )
}

export default Main;
