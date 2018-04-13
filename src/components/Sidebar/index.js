import React from 'react'
import './styles.css'
import ListItem from '../ListItem'

class Sidebar extends React.Component {
  createListItems () {
    let data = this.props.data
    return data.map(item => {
      return (
        <ListItem key={item.id} id={item.id} title={item.title} peek={item.peek} active={item.active ?  true : false}/>
      )
    })
  }

  render () {
    return (
      <div className='sidebar'>
        {this.createListItems()}
      </div>
    )
  }
}

export default Sidebar
