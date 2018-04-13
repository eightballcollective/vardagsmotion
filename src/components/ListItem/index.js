import React from 'react'
import './styles.css'

class ListItem extends React.Component {
  constructor (props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    console.log(this.props.id)
  }

  render () {
    console.log(this.props)
    let {title, id, peek, active} = this.props
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
