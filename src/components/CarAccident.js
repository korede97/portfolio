import React, {Component} from "react"
var image_style = { border: '1px solid #ddd',
 borderRadius: '4px',
  padding: '5px' ,
  width: '80%'}
class CarAccident extends Component {
  render(){
    return (
      <div className = 'container'>
          <img src="/images/accident.jpg" alt="Paris" className="center"
            style = {image_style}/>
            <hr/>
            <br />
            <br />
            <h1 style={{textAlign: 'center'}}>Predicting car accident severity</h1>
            <br />


            <h3>Notes</h3>
              <ul>
                <li>The data in this project was based on Seattle, Washington, USA. I am interested to see how the results may differ with Toronto, Ontario, Canada data </li>
              </ul>


            <h3>Blog section - Coming Soon</h3>
            <hr/>

            <h3>Useful links</h3>

            <ul>
              <li>Click <a href = 'https://github.com/korede97/Coursera_Capstone/blob/master/Coursera_Capstone.ipynb'> here</a> for the notebook </li>
              <li>Click <a href = 'https://github.com/korede97/Coursera_Capstone/blob/master/coursera_capstone_report.pdf'> here</a>  for the report</li>
            </ul>
      </div>


    )
  }
}

export default CarAccident
