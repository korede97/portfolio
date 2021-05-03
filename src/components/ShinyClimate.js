import React, {Component} from "react"
import { TwitterTimelineEmbed } from 'react-twitter-embed';
// import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';
// import { SocialIcon } from 'react-social-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { fab } from '@fortawesome/free-brands-svg-icons'
// import { fas } from "@fortawesome/free-solid-svg-icons"
import { faShareAlt } from "@fortawesome/free-solid-svg-icons";
// import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
// import CommentBox from './comment_box/CommentBox.js'
// import CommentBox from './CommentBox.js';
// import Comments from './Comments.js'

// import {AnimatedSocialIcon} from 'react-animated-social-icons';


var image_style = { border: '1px solid #ddd',
 borderRadius: '4px',
  padding: '5px' ,
  width: '80%'}



class ShinyClimate extends Component {


//   constructor(props) {
//   super(props);
//   this.handleAddComment = this.handleAddComment.bind(this);
//
//
//   this.state = {
//     comments: []
//   }
// }

// handleAddComment(comment) {
//   this.setState(prevState => {
//     return {
//       comments: prevState.comments.concat(comment)
//     };
//   });
// }

// componentDidMount() {
//   /*global Ably*/
//   const channel = Ably.channels.get('comments');
//
//   channel.attach();
//     channel.once('attached', () => {
//       channel.history((err, page) => {
//         // create a new array with comments only in an reversed order (i.e old to new)
//         const comments = Array.from(page.items, item => item.data)
//
//         this.setState({ comments });
//
//         channel.subscribe((msg) => {
//           const commentObject = msg.data;
//           this.handleAddComment(commentObject);
//         })
//       });
//     });
// }

  render(){
    return (

      <div className = 'container'>
          <img src={require("../assets/climate.jpg")} alt="climate" className="center"
            style = {image_style}/>
            <hr/>
            <br />
            <br />
            <h1 style={{textAlign: 'center'}}>Showcasing evidence of climate change</h1>
            <br />



            <h3>Timeline</h3>
            <hr/>
            <div className="centerContent">
              <div className="selfCenter standardWidth">
                <div id = 'container_1'>
                    <TwitterTimelineEmbed
                     sourceType="collection"
                     id = '1315798441075912706'
                     screenName="koredeadegboye"
                     theme="light"
                     borderColor="#40E0D0"
                     noFooter
                     options={{height: 800, width: 300, float:'right'}}
                    />
                </div>
              </div>
            </div>
            <center>

              <div id = 'project_links'>
                <div className = 'bounce'>
                  <a href = "https://ka97.shinyapps.io/shinyClimate/" target ='_blank' rel="noopener noreferrer">
                    <FontAwesomeIcon
                      icon={faShareAlt}
                      size = '2x'
                      color="black"
                      className = 'project_link'
                    />
                  </a>
                </div>
                <br/>
                Shiny Dashboard
              </div>

              <div id = 'project_links'>
                <div className = 'bounce'>
                  <a href = "https://carleton.ca/math/wp-content/uploads/Korede-Adegboye-Honours-Project.pdf" target ='_blank' rel="noopener noreferrer">
                    <FontAwesomeIcon
                      icon={faShareAlt}
                      size = '2x'
                      color="black"
                      className = 'project_link'
                    />
                  </a>
                </div>
                <br/>
                Report
              </div>

              <div id = 'project_links'>
                <div className = 'bounce'>
                  <a href = "https://github.com/korede97/shinyClimate" target ='_blank' rel="noopener noreferrer">
                    <FontAwesomeIcon
                      icon={faGithub}
                      size = '2x'
                      color="black"
                      className = 'project_link'
                    />
                  </a>
                </div>
                <br/>
                Source code
              </div>

            </center>
            <br/>

            <div id =  'overview'>
              <p> Programming </p><div id = 'lighter'> R</div>
              <br/>
              <p> Tools used </p><div id = 'lighter'>Github, RStudio, Jupyter Notebook, Shiny Dashboard</div>
              <br/>
              <p> Concepts</p><div id = 'lighter'>Data Analysis, Data Visualization, Software Engineering</div>
              <br/>
              <p> Year</p><div id = 'lighter'>Jan. 2020</div>
            </div>
              {/*<section className="section">
                <div className="container">
                  <div className="columns">
                    <div className="column is-half is-offset-one-quarter">
                      <CommentBox handleAddComment={this.handleAddComment} />
                      <Comments comments={this.state.comments} />
                    </div>
                  </div>
                </div>
              </section>*/}
      </div>

    )
  }
}

export default ShinyClimate
