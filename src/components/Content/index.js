import React from 'react'
import './styles.css'

class Content extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    let {title, date, summary, href} = this.props
    return (
      <div className='content'>
        <h1>{title}</h1>
        <h5>{date}</h5>
        <p>{summary}</p>
        <a href={href} target='_blank'>Se hela motionen</a>
      </div>
    )
  }
}

export default Content
