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
    let { agreeAction, disagreeAction, refuseAction, id } = this.props
    return (
      <div className='decisionPanel'>
        <Button title='Ja' className='yes' onClick={() => agreeAction('Ja')}/>
        <Button title='Nej' className='no' onClick={() => disagreeAction('Nej')}/>
        <Button title='Avstå' className='refuse' onClick={() => refuseAction('Avstår')}/>
      </div>
    )
  }
}

function mapStateToProps(state, props) {
  return {}
}

function mapDispatchToProps(dispatch) {
  return {
    agreeAction: (payload) => dispatch(agree(payload)),
    disagreeAction: (payload) => dispatch(disagree(payload)),
    refuseAction: (payload) => dispatch(refuse(payload)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DecisionPanel)
