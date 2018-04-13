import React from 'react'
import Sidebar from '../Sidebar'
import './styles.css'
import data from '../../resources/data'

function Content() {
  return (
    <div className='content'>
      <Sidebar data={data}/>
    </div>
  )
}

export default Content
