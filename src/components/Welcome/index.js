import React from 'react'
import './styles.css'

class Welcome extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div className='content'>
        <h1>Välkommen</h1>
        <p>Beskrivning av hur allt fungerar...</p>
      </div>
    )
  }
}

export default Welcome
