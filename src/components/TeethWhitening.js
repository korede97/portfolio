import React, {Component} from "react"

var image_style = { border: '1px solid #ddd',
 borderRadius: '4px',
  padding: '5px' ,
  width: '80%'}


class TeethWhitening extends Component {
  render(){
    return (
      <div className = 'container'>
          <img src="/images/climate.jpg" alt="Paris" className="center"
            style = {image_style}/>
            <hr/>
            <br />
            <br />
            <h1 style={{textAlign: 'center'}}>Determining which teeth "whitening" products remove the most surface stains</h1>
            <br />

            <h3>Notes</h3>
              <ul>
                <li> Questions </li>
                  <ul>
                    <li> What products remove extrinsic teeth stains teeth the best ? </li>
                    <li> Optimal amount of days until surface stains removed ?</li>
                  </ul>
                <li>Methods </li>
                  <ul>
                    <li> Vita shade scale</li>
                    <li> Machine learning - color recognition. Evaluating colour differences</li>
                  </ul>
                <li>I find myself trying different whitening products. Not noticing the differences between the outcomes. </li>
                <li>To proceed with this project, I will need to formally outline the experiment. </li>
                <li>Each whitening product will be tested 2 weeks at a time. Thus, this project may take a while to complete but I cant wait to see the results!</li>
                <li>I might be able to apply some design and analysis of variance background </li>
              </ul>

            <hr/>
            <h3>Blog section - Coming Soon</h3>
            <hr/>

            <h3>Useful links</h3>

      </div>


    )
  }
}

export default TeethWhitening
