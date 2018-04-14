import React from 'react'
import './styles.css'
import {getColorFromID} from '../../utils/utils.js'

class Button extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    let {title, className} = this.props
    let bgColor = getColorFromID({id: title})
    return (
      <button onClick={() => this.props.onClick()} className={className} style={{backgroundColor: bgColor}}>
        {title}
      </button>
    )
  }
}

export default Button
