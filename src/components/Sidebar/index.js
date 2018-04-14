import React from 'react'
import './styles.css'
import ListItem from '../ListItem'
import { connect } from 'react-redux'
import { updateContent, fetchData } from '../../actions/contentActions'
import { setActive, fetchDecisions } from '../../actions/sidebarActions'
import api from '../../api'

class Sidebar extends React.Component {
  constructor (props) {
    super(props)
    this.createListItems = this.createListItems.bind(this)
  }

  createListItems () {
    const { decisions, onListItemClick } = this.props
    return decisions.map(item => {
      return (
        <ListItem key={item.id}
          id={item.id}
          title={item.title}
          peek={item.peek}
          active={item.active}
          date={item.date}
          summary={item.summary}
          href={item.href}
          onClick={() => onListItemClick(item)}/>
      )
    })
  }

  render () {
    return (
      <div className='sidebar'>
        {this.createListItems()}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  decisions: state.sidebar.decisions,
  isPopulated: state.sidebar.isPopulated
})

const mapDispatchToProps = dispatch => ({
  onListItemClick: (payload) => {
    dispatch(updateContent(payload))
    dispatch(setActive(payload.id))
    dispatch(fetchData(payload))
  },
  fetchDecisions: () => dispatch(fetchDecisions())
})

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar)
