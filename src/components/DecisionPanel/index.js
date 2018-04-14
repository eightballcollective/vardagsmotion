import React from 'react'
import './styles.css'
import Button from '../Button'
import { connect } from 'react-redux'
import { agree, disagree, refuse } from '../../actions/contentActions'

class DecisionPanel extends React.Component {
  constructor (props) {
    super(props)

  }

  render () {
    let { agreeAction, disagreeAction, refuseAction } = this.props
    return (
      <div className='decisionPanel'>
        <Button title='Ja' className='yes' onClick={() => agreeAction()}/>
        <Button title='Nej' className='no' onClick={() => disagreeAction()}/>
        <Button title='Avstå' className='refuse' onClick={() => refuseAction()}/>
      </div>
    )
  }
}

function mapStateToProps(state, props) {
  return {}
}

function mapDispatchToProps(dispatch) {
  return {
    agreeAction: () => dispatch(agree()),
    disagreeAction: () => dispatch(disagree()),
    refuseAction: () => dispatch(refuse()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DecisionPanel)
