import React, { useState, useEffect } from "react";
import {Link} from 'react-router-dom';
import { TwitterTimelineEmbed } from 'react-twitter-embed';
// import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';
import Carousel from 'react-bootstrap/Carousel'
import {portfolio} from './images.js'
import 'react-slideshow-image/dist/styles.css'
import ReactPlayer from 'react-player'


// https://codesandbox.io/s/mystifying-moon-upkv6?from-embed=&file=/src/styles.css:491-645
// Source: https://stackoverflow.com/questions/50052535/reactjs-multiple-if-conditions-inside-map-function

function Content() {
  const [filter, setFilter] = useState("all");
  const [projects, setProjects] = useState([]);

  useEffect(() => {

    setProjects(portfolio);
  }, []);


  useEffect(() => {
    setProjects([]);

    const filtered = portfolio.map(p => ({
      ...p,
      filtered: p.category.includes(filter)
    }));
    setProjects(filtered);
  }, [filter]);


  const [index, setIndex] = useState(0);

  // const handleSelect = (selectedIndex, e) => {
  //   setIndex(selectedIndex);
  // };

  return (
    <>
    <div id = 'gridlayout'>

    <center>
      <div id="portfolio_labels" className = 'center'>
        <button  className = 'btn'  active={filter === "all"} onClick={() => setFilter("all")}>
          All
        </button>
        <button
          className = 'btn'
          active={filter === "healthcare"}
          onClick={() => setFilter("healthcare")}
        >
          Health care
        </button>
        <button
          className = 'btn'
          active={filter === "sports_exercise"}
          onClick={() => setFilter("sports_exercise")}
        >
          Sports & Exercise
        </button>
        <button
          className = 'btn'
          active={filter === "environment"}
          onClick={() => setFilter("environment")}
        >
          Environment
        </button>
        <button
          className = 'btn'
          active={filter === "finance"}
          onClick={() => setFilter("finance")}
        >
          Finance
        </button>
        <button
          className = 'btn'
          active={filter === "retail_ecommerce"}
          onClick={() => setFilter("retail_ecommerce")}
        >
          Retail & E-commerce
        </button>
        <button
          className = 'btn'
          active={filter === "community"}
          onClick={() => setFilter("community")}
        >
          Community
        </button>
        <button
          className = 'btn'
          active={filter === "personal"}
          onClick={() => setFilter("personal")}
        >
          Personal
        </button>
        <button
          className = 'btn'
          active={filter === "general"}
          onClick={() => setFilter("general")}
        >
          General
        </button>
        <button
          className = 'btn'
          active={filter === "real_estate"}
          onClick={() => setFilter("real_estate")}
        >
          Real Estate
        </button>
        <button
          className = 'btn'
          active={filter === "food"}
          onClick={() => setFilter("food")}
        >
          Food
        </button>
        <button
          className = 'btn'
          active={filter === "criminal_law"}
          onClick={() => setFilter("criminal_law")}
        >
          Criminal Law
        </button>
      </div>
      </center>

      <div className = 'row'>

        {projects.map(item =>
          item.filtered === true && item.link != null  ?
            <div className = 'column'>
              <Link to= {item.link} style = {{color:"black"}}>
                <div id = 'container_1'>
                  <img key={item.name} src = {item.src}/>
                  <p> {item.name} </p>
                </div>
              </Link>
              <p style = {{fontSize: '14px'}}> {item.headline} </p>
            </div>
          :item.filtered === true && item.href != null ?
            <div className = 'column'>
              <a style = {{color:"black"}} href = {item.href} target = '_blank' rel = 'noopener noreferrer'>
                <div id = 'container_1'>
                    <img key={item.name} src = {item.src}/>
                    <p> {item.name} </p>
                </div>
              </a>
              <p style = {{fontSize: '14px'}}> {item.headline} </p>
            </div>
            :item.filtered === true && item.name === 'intro' ?
            <div className = 'column'>
              <div id = "container_1">
                <div id = 'player-wrapper'>
                  <ReactPlayer
                    url = {item.src}
                    controls = 'true'
                    width = '100%'
                    height= '300px'
                  />
                  <p> {item.name} </p>
                </div>
                <p style = {{fontSize: '14px'}}> {item.headline} </p>
              </div>
            </div>
            :item.filtered === true && item.name === 'Book Club' ?
            <div className = 'column'>
              <div id = 'container_1'>
              <center>
                <div id = 'current_book' style = {{border:'5px solid #33b3a6', height: '350px'}}>
                  <img key={item.name} src = {item.src} style = {{width: '175px'}}/>
                  <h4>Our March Book Club Reading - Join us!</h4>
                </div>
                </center>

              </div>
            </div>
            :item.filtered === true && item.name === 'goodreads' ?
            <div className = 'column'>
              <div id="gr_updates_widget">
                <iframe id="the_iframe" title = "GoodReads Widget" src="https://goodreads.com/widgets/user_update_widget?height=400&num_updates=5&user=58960239&width=400" width={'97%'} height={300} frameBorder={0} />
                <div id="gr_footer">
                  <a href="https://www.goodreads.com/"><img alt="Goodreads: Book reviews, recommendations, and discussion" src="https://www.goodreads.com/images/layout/goodreads_logo_140.png" /></a>
                </div>
                </div>
              </div>

              :item.filtered === true && item.name === 'twitter' ?
              <div className = 'column'>
                <div id = 'container_1'>
                    <TwitterTimelineEmbed
                     sourceType="profile"
                     screenName="cosyanalytics"
                     theme="dark"
                     noFooter
                     noHeader
                     options={{height: 400}}
                    />
                </div>
              </div>
          :item.filtered === true ?
            <div className = 'column'>
                <div id = 'container_1'>
                    <img key={item.name} src = {item.src}/>
                    <div className="text-block"> {item.name} </div>
                </div>
                <p style = {{fontSize: '14px'}}> {item.headline} </p>
            </div>

          : ""
        )}



        </div>
        </div>



    </>
  );
}

export default Content;



{/*:item.filtered === true && (item.name).includes('365') ?
<div className = 'column'>
  <Carousel Carousel activeIndex={index} onSelect={handleSelect}>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={item.src[0]}
        alt="First slide"
      />
      <Carousel.Caption>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={item.src[0]}
        alt="Third slide"
      />

      <Carousel.Caption>
        <h3>Second slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={item.src[1]}
        alt="Third slide"
      />

      <Carousel.Caption>
        <h3>Third slide label</h3>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
</div>*/}
