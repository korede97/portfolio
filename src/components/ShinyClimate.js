import React, {Component} from "react"

var image_style = { border: '1px solid #ddd',
 borderRadius: '4px',
  padding: '5px' ,
  width: '80%'}

class ShinyClimate extends Component {
  render(){
    return (

      <div className = 'container'>
          <img src="/images/climate.jpg" alt="Paris" className="center"
            style = {image_style}/>
            <hr/>
            <br />
            <br />
            <h1 style={{textAlign: 'center'}}>Showcasing evidence of climate change</h1>
            <br />

            <h3>Blog section - Coming Soon</h3>
            <hr/>

            <h3>Useful links</h3>

            <ul>
              <li>Click <a href = 'https://ka97.shinyapps.io/shinyClimate/'> here</a> for the shiny application </li>
              <li>Click <a href = 'https://carleton.ca/math/wp-content/uploads/Korede-Adegboye-Honours-Project.pdf'> here</a>  for the report</li>
              <li>Click <a href = 'https://github.com/korede97/shinyClimate'> here</a>  for the source code </li>
            </ul>
      </div>


    )
  }
}

export default ShinyClimate
