import React from 'react'
import './styles.css'
import { connect } from 'react-redux'
import DecisionPanel from '../DecisionPanel'
import Welcome from '../Welcome'
import { fetchSummary, updateSummary } from '../../actions/contentActions'
import api from '../../api'
import PiePanel from '../PiePanel'

class Content extends React.Component {
  constructor (props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
    this.state = {voted: false, votedFor: null}
  }

  handleClick (vote) {
    this.setState({voted: true, votedFor: vote})
  }

  componentDidUpdate(prevProps) {
    if (prevProps.content.id === this.props.content.id) { return }
    this.setState({voted: false, votedFor: null})
    this.props.updateSummary('')
    this.props.fetchSummary(this.props.content.href)
  }

  render () {
    let {title, subtitle, date, href} = this.props.content
    let summary = this.props.summary
    return (
      this.props.isPopulated ? (<div className='content'>
        <div>
          <h1>{title}</h1>
          <h5>{date.substring(0, 10)}</h5>
          <p>{ summary || 'Ingen sammanfattning tillgänglig' }</p>
          <br/>
          {href ? <a href={href} target='_blank'>Se hela motionen</a> : ''}
        </div>
        <div>
          {this.props.isPopulated ? <DecisionPanel voted={this.state.voted} votedFor={this.state.votedFor} handleClick={this.handleClick}/> : ''}
          <PiePanel size={130} votingData={this.props.votingData} voted={this.state.voted}/>
        </div>
      </div>) : <Welcome/>
    )
  }
}

const mapStateToProps = state => ({
  content: state.content.content,
  summary: state.content.summary,
  isPopulated: state.content.isPopulated,
  votingData: state.content.votingData.filter(data => data.parti !== '-')
})

const mapDispatchToProps = dispatch => ({
  fetchSummary: (id) => dispatch(fetchSummary(id)),
  updateSummary: (href) => dispatch(updateSummary(href)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Content)
