import React from 'react'
import { render } from 'react-dom'
import { Pie } from '@nivo/pie'
import './styles.css'
import { getColorFromID } from '../../utils/utils'
import L from'../../logos/liberalerna.png'
import M from'../../logos/moderaterna.png'
import S from'../../logos/socialdemokraterna.png'
import V from'../../logos/vänsterpartiet.png'
import MP from'../../logos/miljöpartiet.png'
import SD from'../../logos/sverigedemokraterna.png'
import KD from'../../logos/kristdemokraterna.png'
import C from'../../logos/centerpartiet.png'

class PiePanel extends React.Component {
  convertVoting (party) {
    return [
      {id: 'yes', label: 'Ja', value: party.yes},
      {id: 'no', label: 'Nej', value: party.no},
      {id: 'pass', label: 'Avstår', value: party.pass},
      {id: 'absent', label: 'Frånvarande', value: party.absent}
    ].sort((a, b) => b.value - a.value)
  }

  stringToParty (id, logoOrName) {
    switch (id) {
    case 'L':
      return logoOrName === 'logo' ? L : 'Liberalerna'
    case 'C':
      return logoOrName === 'logo' ? C : 'Centerpartiet'
    case 'M':
      return logoOrName === 'logo' ? M : 'Moderaterna'
    case 'MP':
      return logoOrName === 'logo' ? MP : 'Miljöpartiet'
    case 'S':
      return logoOrName === 'logo' ? S : 'Socialdemokraterna'
    case 'SD':
      return logoOrName === 'logo' ? SD : 'Sverigedemokraterna'
    case 'KD':
      return logoOrName === 'logo' ? KD : 'Kristdemokraterna'
    case 'V':
      return logoOrName === 'logo' ? V : 'Vänsterpartiet'
    }
  }

  generatePies (votingData) {
    const { size } = this.props
    return votingData.map((party, index) => {
      return (
        <div key={index} id={index}>
          <img style={{width: size/3, transform: `translateY(${(size/2)+(size/6)+4}px)`}} src={this.stringToParty(party.parti, 'logo')} ></img>
          <Pie
            key={index}
            data={this.convertVoting(party)}
            width={size}
            height={size}
            enableRadialLabels={false}
            enableSlicesLabels={false}
            innerRadius={0.5}
            colorBy={getColorFromID}/>
          <p className='partyName'>{this.stringToParty(party.parti, 'name')}</p>
        </div>
      )
    })
  }

  render () {
    const { votingData, voted } = this.props
    let pieContent = <div></div>
    if (voted) {
      pieContent = (
        <div className='pies'>
          <div className='pieBlock'>
            {this.generatePies(votingData.slice(0,4))}
          </div>
          <div className='pieBlock'>
            {this.generatePies(votingData.slice(4,8))}
          </div>
        </div>
      )
    }
    return (
      pieContent
    )
  }
}

export default PiePanel
