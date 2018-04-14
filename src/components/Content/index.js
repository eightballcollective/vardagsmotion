import React from 'react'
import './styles.css'
import { connect } from 'react-redux'
import DecisionPanel from '../DecisionPanel'

class Content extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    let {title, date, summary, href} = this.props.content
    console.log(this.props)
    return (
      <div className='content'>
        <div>
          <h1>{title}</h1>
          <h5>{date}</h5>
          <p>{summary}</p>
          {href ? <a href={href} target='_blank'>Se hela motionen</a> : ''}
        </div>
        <div>
          {this.props.isPopulated ? <DecisionPanel/> : ''}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  content: state.content.content,
  isPopulated: state.content.isPopulated,
})

export default connect(mapStateToProps)(Content)
