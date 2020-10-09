import React, {Component} from "react"

var image_style = { border: '1px solid #ddd',
 borderRadius: '4px',
  padding: '5px' ,
  width: '80%'}


class HealthyLiving extends Component {
  render(){
    return (
      <div className = 'container'>
          <img src="/images/climate.jpg" alt="Paris" className="center"
            style = {image_style}/>
            <hr/>
            <br />
            <br />
            <h1 style={{textAlign: 'center'}}>Analysing the components of a healthy lifestyle for an individual</h1>
            <br />


            <h3>Notes</h3>
              <ul>
                <li> Questions </li>
                  <ul>
                    <li> How often should I exercise ? </li>
                    <li> Should I eat more protein?</li>
                    <li> What is the most efficient way for me to maintain a healthy lifestyle</li>
                  </ul>
                <li>Data Collection </li>
                  <ul>
                    <li> Fitness log created by me </li>
                    <li> Food log from myPlate application</li>
                    <li> iPhone health data</li>
                  </ul>
                <li>Over the past couple of weeks, I have been refining my data collection process. So many variables, can be measured and I would love to capture them all. Since we never know which may be useful during our analysis </li>
                <li>Data Visualization should play a key role in determining the results </li>
                <li>It will be ineteresting to see how I end up combining the data from these sources </li>
                <li>A database will be created to store the data and practice SQL queries of the data</li>
              </ul>

            <h3>Blog section - Coming Soon</h3>
            <hr/>

            <h3>Useful links</h3>


      </div>

    )
  }
}

export default HealthyLiving
