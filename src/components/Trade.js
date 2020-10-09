import React, {Component} from "react"
var image_style = { border: '1px solid #ddd',
 borderRadius: '4px',
  padding: '5px' ,
  width: '80%'}
class Trade extends Component {
  render(){
    return (
      <div className = 'container'>
          <img src="derozan.jpg" alt="trade" className="center"
            style = {image_style}/>
            <hr/>
            <br />
            <br />
            <h1 style={{textAlign: 'center'}}>Analysis of Toronto Raptors trading DeMar DeRozan</h1>
            <br />


            <h3>Notes</h3>
              <ul>
                <li>It has been mentioned in several media reports that before DeMar DeRozan was traded, he was told by the Raptors General Manager he will not be traded. Suddenly, days later DeMar DeRozan was traded to the San Antonio Spurs</li>
                <li>With such a report, I presume that the Toronto Raptors used data analysis to evaluate their trade options during the offseason</li>
                <li>In addition, IBM works with Toronto Raptors on numerous basketball analytics</li>
              </ul>


            <h3>Blog section - Coming Soon</h3>
            <hr/>

            <h3>Useful links</h3>
      </div>


    )
  }
}

export default Trade
