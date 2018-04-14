import React from 'react'
import './styles.css'

class Button extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    let {title, className} = this.props
    return (
      <button onClick={() => this.props.onClick()} className={className}>
        {title}
      </button>
    )
  }
}

export default Button
