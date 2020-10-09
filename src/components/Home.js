import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';


class Home extends Component {
  render() {
    return (
      <div className = "container">
        <center><h2>Data Analyst</h2></center>
        <div id = 'gridlayout'>
          <div className='row'>
            <div className='column'>

            <Link to="/shinyClimate">
              <div id = 'container_1'>
                <div className = 'zoom'>
                      <img src="climate.jpg" alt='shinyclimate' style={{width:"100%"}} />
                  <div className="text-block"><h4>Showcasing evidence of climate change</h4> </div>
                </div>
              </div>
              </Link>


              <Link to="/carAccident">
                <div id = 'container_1'>
                  <div className = 'zoom'>
                    <img src="accident.jpg" alt='shinyclimate' style={{width:"100%"}} />
                    <div className="text-block"><h4>Predicting car accient severity</h4></div>
                  </div>
                </div>
              </Link>


              <div id = 'container_1'>
              <div className = 'zoom'>
                  <Link to="/trade">
                    <img src="derozan.jpg" alt='shinyclimate' style={{width:"100%"}} />
                  </Link>
                  <div className="text-block"><h5>Basketball Analytics Project - Coming Soon!!!</h5> Analysis of Toronto Raptors trading Demar Derozan</div>
                  </div>
              </div>

              <div id="gr_updates_widget">
                <iframe id="the_iframe" title = "GoodReads Widget" src="https://goodreads.com/widgets/user_update_widget?height=400&num_updates=5&user=58960239&width=400" width={'97%'} height={300} frameBorder={0} />
                <div id="gr_footer">
                  <a href="https://www.goodreads.com/"><img alt="Goodreads: Book reviews, recommendations, and discussion" src="https://www.goodreads.com/images/layout/goodreads_logo_140.png" /></a>
                </div>
              </div>

              <div id = 'widget_container'>
                {/*<div className = 'zoom'>*/}
                  <h2>
                   {/*<a href = 'https://github.com/korede97/book_recommendation_widget' target = '_blank'> Book Recommendation Widget - Coming Soon!!!</a>*/}
                   Book Recommendation Widget - Coming Soon!!!
                  </h2>
                {/*</div>*/}
              </div>

              {/*<Link to="/resources">
                <div id = 'container_2'>
                  <div className = 'zoom'>
                    <h2> Useful Resources</h2>
                  </div>
                </div>
              </Link>*/}



              <div id = 'container_1'>
              {/*<div className = 'zoom'>
                  <Link to="/shinyclimate">*/}
                    <img src="special.jpg" alt='shinyclimate' style={{width:"100%"}} />
                    {/*</Link>*/}
                  <div className="text-block"><h4>Special Education Project - Coming Soon!!!</h4></div>
                  {/*</div>*/}
              </div>

              <div id = 'container_1'>
                {/*<div className = 'zoom'>
                  <Link to="/shinyclimate">*/}
                    <img src="lyrics.jpg" alt='shinyclimate' style={{width:"100%"}} />
                    {/*</Link>*/}
                  <div className="text-block"><h4>Lyrical Sentiment Analysis  - Coming Soon!!!</h4></div>
                {/*</div>*/}
              </div>


            </div>

            <div className='column'>



              <div id = 'container_1'>
                <div className = 'zoom'>
                  <Link to="/healthyLiving">
                      <img src="healthy.jpg" alt='shinyclimate' style={{width:"100%"}} />
                      </Link>
                  <div className="text-block">
                    <h5>Healthy Lifestyle Project - Coming Soon!!!</h5>
                    Analysing the components of a healthy lifestyle for an individual
                  </div>
                </div>
              </div>

              <div id = 'container_1'>
                  <TwitterTimelineEmbed
                   sourceType="profile"
                   screenName="koredeadegboye"
                   theme="dark"
                   noFooter
                   noHeader
                   options={{height: 400}}
                  />
              </div>


              <div id = 'container_1'>
                <div className = 'zoom'>
                  <Link to="/teethWhitening">
                    <img src="whitening.jpg" alt='shinyclimate' style={{width:"100%"}} />
                    </Link>
                  <div className="text-block">
                    <h5>Teeth Whitening Project - Coming Soon!!!</h5>
                    Determining which teeth "whitening" products remove the most surface stains
                  </div>
                </div>
              </div>


              <a href = 'https://github.com/korede97/MovieSubtitle_WordCloud/blob/main/MovieSubtitle_WordCloud.ipynb' target = '_blank' rel = 'noopener noreferrer'>
              <div id = 'container_1'>
                <div className = 'zoom'>
                  {/*<Link to="/shinyclimate">*/}
                    <img src="wc.jpg" alt='shinyclimate' style={{width:"100%"} } />
                    {/*</Link>*/}
                  <div className="text-block"><h4>Movie Subtitle Word Cloud </h4>Space Jam (1996) and Inception (2010)</div>
                  </div>
              </div>
              </a>


              <div id = 'container_1'>
              {/*<div className = 'zoom'>
                  <Link to="/shinyclimate">*/}
                    <img src="business.jpg" alt='shinyclimate' style={{width:"100%"}} />
                  {/*</Link>*/}
                  <div className="text-block"><h4>Business Intelligence Project - Coming Soon!!!</h4></div>
                  {/*</div>*/}
              </div>






              <div id = 'container_1'>
              {/*<div className = 'zoom'>
                  <Link to="/shinyclimate">*/}
                    <img src="design.jpg" alt='shinyclimate' style={{width:"100%"}} />
                    {/*</Link>*/}
                  <div className="text-block"> <h4>Interior Design Project - Coming Soon!!!</h4></div>
                  {/*</div>*/}
              </div>

              {/*chat box widget*/}
              {/*<div id = 'widget_container'>
                <div className = 'zoom'>
                  <h2>
                   <a href = 'https://github.com/korede97/book_recommendation_widget'> Chat Box Widget - Coming Soon!!!</a>
                  </h2>
                </div>
              </div>*/}


            </div>
          </div>
        </div>
      </div>


    );
  }
}

export default Home;
