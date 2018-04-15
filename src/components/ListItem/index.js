import React from 'react'
import './styles.css'

class ListItem extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    let {title, subtitle, tags, active, onClick} = this.props
    let activeClass = active ? ' active' : ''
    return (
      <div className={'list-item' + activeClass} onClick={onClick}>
        <h4 className='list-item-header'>{title}</h4>
        <p>
          {JSON.parse(tags).join(', ')}
        </p>
      </div>
    )
  }
}

export default ListItem
