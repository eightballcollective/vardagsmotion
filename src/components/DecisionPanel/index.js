import React from 'react'
import './styles.css'
import Button from '../Button'
import { connect } from 'react-redux'
import { agree, disagree, refuse } from '../../actions/contentActions'
import { getColorFromID } from '../../utils/utils'

class DecisionPanel extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    let { agreeAction, disagreeAction, refuseAction, id, handleClick, voted, votedFor} = this.props
    const svToEn = {'Ja': 'yes', 'Nej': 'no', 'Avstå': 'pass'}
    const color = getColorFromID({id: svToEn[votedFor]})
    console.log(color)
    return (
      voted ? (<div className='decisionPanel'><p className='vote' style={{color: color}}>Du röstade <u>{votedFor}</u><br/>Så här röstade riksdagen:</p></div>) : (
        <div className='decisionPanel'>
          <Button title='Ja' className='yes' onClick={agreeAction} handleClick={handleClick}/>
          <Button title='Nej' className='no' onClick={disagreeAction} handleClick={handleClick}/>
          <Button title='Avstå' className='pass' onClick={refuseAction} handleClick={handleClick}/>
        </div>)
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
