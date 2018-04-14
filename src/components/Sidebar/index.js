import React from 'react'
import './styles.css'
import ListItem from '../ListItem'
import { connect } from 'react-redux';
import { updateContent } from '../../actions/sidebarActions';

class Sidebar extends React.Component {
  constructor (props) {
    super(props)
    this.createListItems = this.createListItems.bind(this)
  }

  createListItems () {
    let decisions = this.props.decisions
    return decisions.map(item => {
      return (
        <ListItem key={item.id}
          id={item.id}
          title={item.title}
          peek={item.peek}
          active={item.active ?  true : false}
          date={item.date}
          summary={item.summary}
          href={item.href}
          onClick={updateContent}/>
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

function mapStateToProps(state, props) {
  return {
    decisions: state.sidebar.decisions,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    updateContent() { dispatch(updateContent()) },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar)
