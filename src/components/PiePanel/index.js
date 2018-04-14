import React from 'react'
import { render } from 'react-dom'
import { Pie } from '@nivo/pie'
import './styles.css'
import { getColorFromID } from '../../utils/utils'

class PiePanel extends React.Component {
  generatePies (votingData) {
    votingData.map((data) => {
      return data.sort((a, b) => b.value - a.value)
    })
    return votingData.map((party, index) => {
      return (
        <div key={index} id={index}>
          <p>Sverigedemokraterna</p>
          <Pie
            key={index}
            data={party}
            width={80}
            height={80}
            enableRadialLabels={false}
            enableSlicesLabels={false}
            innerRadius={0.5}
            padAngle={0.7}
            colorBy={getColorFromID}/>
        </div>
      )
    })
  }

  render () {
    const { votingData, answered } = this.props
    let pieContent = <div></div>
    if (answered) {
      pieContent = (
        <div className='pies'>
          {this.generatePies(votingData)}
        </div>
      )
    }
    return (
      pieContent
    )
  }
}

export default PiePanel
