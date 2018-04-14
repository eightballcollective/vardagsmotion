import React from 'react'
import './styles.css'
import {getColorFromID} from '../../utils/utils.js'

class Button extends React.Component {
  constructor (props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick () {
    this.props.onClick(this.props.title)
    this.props.handleClick()
  }

  render () {
    let {title, className, onClick} = this.props
    let bgColor = getColorFromID({id: className})
    return (
      <button onClick={this.handleClick} className={className} style={{backgroundColor: bgColor}}>
        {title}
      </button>
    )
  }
}

export default Button
