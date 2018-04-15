import React from 'react'
import './styles.css'

class Welcome extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div className='content'>
      <div>
        <h1>Välkommen till Vardagsmotion</h1>
        <p>
        På Vardagsmotion sammanställs vilka betänkanden riksdagen har röstat 
        om och hur riksdagspartierna har röstat. Denna information kan klargöra för dig
        som inte är insatt i hur riksdagen eller politiken fungerar och för dig som sympatiserar 
        med ett parti får du en inblick i hur de röstar och möjlighet att jämföra med övriga partier.</p>
        <br/>
        <p><b>Ett betänkande</b> är en skrivelse (rapport) från ett utskott till riksdagen 
        med motiverat förslag till riksdagsbeslut, det vill säga om hur 
        riksdagen ska besluta om förslagen i propositioner, motioner m.m. (Wikipedia)</p>
        <br/>
        <p>Välj ett betänkande i listan till vänster för att visa mer information.
        För att se riksdagspartiernas röstresultat måste du själv ta ställning i betänkandet.</p>
        </div>
      </div>
    )
  }
}

export default Welcome
