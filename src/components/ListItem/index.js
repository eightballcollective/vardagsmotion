import React from 'react'
import './styles.css'

class ListItem extends React.Component {
  constructor (props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    let onClick = this.props.onClick
    onClick(this.props)
  }

  render () {
    let {title, id, peek, active, summary, href, date} = this.props
    let activeClass = active ? ' active' : ''
    return (
      <div className={'list-item' + activeClass} onClick={this.handleClick}>
        <h4 className='list-item-header'>{title}</h4>
        <p>{peek}</p>
      </div>
    )
  }
}

export default ListItem;
