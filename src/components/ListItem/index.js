import React from 'react'
import './styles.css'

class ListItem extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    let {title, id, peek, active, summary, href, date, onClick} = this.props
    let activeClass = active ? ' active' : ''
    return (
      <div className={'list-item' + activeClass} onClick={onClick}>
        <h4 className='list-item-header'>{title}</h4>
        <p>{peek}</p>
      </div>
    )
  }
}

export default ListItem
