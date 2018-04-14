import React from 'react'
import './styles.css'
import { connect } from 'react-redux'

class Content extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    let {title, date, summary, href} = this.props.content
    return (
      <div className='content'>
        <h1>{title}</h1>
        <h5>{date}</h5>
        <p>{summary}</p>
        {href ? <a href={href} target='_blank'>Se hela motionen</a> : ''}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  content: state.content.content,
})

export default connect(mapStateToProps)(Content)
