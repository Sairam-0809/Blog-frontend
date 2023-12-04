import React, {useEffect, useState } from 'react'
import axios from 'axios';
import { Link} from 'react-router-dom';
import "./Home.css"
import Footer from '../Routes/Footer';
function Home() {
  const [imageLeftData, setImageLeftData] = useState([]);
  const [imageRightData, setImageRightData] = useState([]);
  const [latest, setLatest] = useState([]);
  const [top, setTop] = useState([]);
  const [article, setArticle] = useState([]);
  const [stories, setStories] = useState([]);
  // const [bolgIdData, setBlogIdData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://blogbackend-muak.onrender.com/blogrouter/getblogdata/imageLeft');
        setImageLeftData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);
  useEffect(() => {
    const fetchData1 = async () => {
      try {
        const response = await axios.get('https://blogbackend-muak.onrender.com/blogrouter/getblogdata/imageright');
        setImageRightData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData1();
  }, []);
  useEffect(() => {
    const fetchLatest = async () => {
      try {
        const response = await axios.get('https://blogbackend-muak.onrender.com/blogrouter/getblogdata/latest');
        setLatest(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchLatest();
  }, []);
  useEffect(() => {
    const fetchTop = async () => {
      try {
        const response = await axios.get('https://blogbackend-muak.onrender.com/blogrouter/getblogdata/top');
        setTop(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchTop();
  }, []);
  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const response = await axios.get('https://blogbackend-muak.onrender.com/blogrouter/getblogdata/article');
        setArticle(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchArticle();
  }, []);
  useEffect(() => {
    const fetchStories = async () => {
      try {
        const response = await axios.get('https://blogbackend-muak.onrender.com/blogrouter/getblogdata/stories');
        setStories(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchStories();
  }, []);
  return (
    <>
    <div className='home-image-parent'>
      <div className='home-image-left'>
        {imageLeftData.map((item ,index)=>{
        return(
          <div  className="image-container">
            <Link to={`/detailshome/${item.id}`}>
              <img className='home-bar-image-left' src={item.image} alt="not found"/> 
              <div className="text-overlay">
                <h2 >{item.heading}</h2>
              </div>
            </Link>
          </div>
        )
      })}
      </div>
      <div className='home-image-right'>
        {imageRightData.map((item ,index)=>{
        return(
          <div className="image-container">
            <Link to={`/detailshome/${item.id}`}>
              <img className='home-bar-image-right' src={item.image} alt="not found"/> 
              <div className="text-overlay-right">
                <h2 >{item.heading}</h2>
              </div>
            </Link>
          </div>
        )
      })}
      </div>

    </div>
      
      
        <h1 className='news-head' style={{margin:"20px", color:"lightsalmon"}}>Latest</h1>
        <div className='home-latest'>
        {latest.map((item ,index)=>{
            // console.log(item);
            console.log(item.id)
            return (
              <div className='home-latest-news-parent' key={index}>
                  <Link className='link-home' to={`/detailshome/${item.id}`}>
                    <div className='home-latest-child'>                      
                      <div className='latest-desp-parent'>
                        <h4 className='latest-desp'>{item.footer}</h4>
                        <div className='latest-latest-image-parent'>
                          <img className='home-latest-image' src={item.image} alt="not found"/> 
                        </div>
                        <h2 style={{margin:"20px 0px"}}>{item.heading}</h2>
                        <p style={{margin:"20px 0px"}}>{item.description.slice(0, 80)} . . .</p>
                      </div>
                    </div>
                  </Link>
              </div>
              )
            })} 
        </div>
            <hr style={{width:"100%"}}/>
        <div className='article-parent'>
          <div className='left-cont'>
            <h2 className='news-head' style={{marginTop:"20px", color:"lightsalmon"}}>Latest Article</h2>
          {article.map((item ,index)=>{
            // console.log(item); 
            console.log(item.id)
            return (
              <div className='home-latest-parent' key={index}>
                  <Link style={{width:"100%"}}  to={`/detailshome/${item.id}`}>
                    <div className='home-latest-child'>                      
                      <div className='single-latest-article'>
                        <div>
                          <img className='home-latest-article-image' src={item.image} alt="not found"/> 
                        </div>
                        <div className='latest-desp-parent'>
                          <h4>{item.heading}</h4>
                          <p style={{fontSize:"12px"}} >{item.description.slice(0, 80)} . . .</p>
                          <h4 className='latest-desp'>{item.footer}</h4>
                        </div>
                      </div>
                    </div>
                    {/* <hr/> */}
                  </Link>                  
              </div>
              )
            })}
          </div>
          <div className='right-cont'>
            <div className='advert-parent'>
              <a href="https://karnatakatourism.org/">
                <div className='advert'>
                    <h2 className='advert-head news-head' style={{marginTop:"20px", color:"lightsalmon"}}>Advertisement</h2>
                      <img width={"200px"} height={"150px"} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg9ppROvd32lgEZuWK1CtEY0uqCOC1UL0jWzLYybidwnyDj2ZUTLpw&usqp=CAE&s' alt='ad img' />
                      <img className='advert-image'  src='https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/652c3184501321.Y3JvcCw5MzAsNzI4LDM3Nyww.jpg' alt='ad img'/>
                </div>
              </a> 
            </div>
            <hr style={{marginTop:"50px" , width:"100%"}}/>
            <div className='home-top'>
            <h2 className='news-head' style={{marginTop:"70px", color:"lightsalmon"}}>Latest Top</h2>
            {top.map((item ,index)=>{
            // console.log(item); 
            console.log(item.id)
            return (
              <div  className='home-latest-parent' key={index}>
                  <Link className='' to={`/detailshome/${item.id}`}>
                    <div className='home-latest-child'>                      
                      <div className='single-latest-top'>
                        <div>
                          <img className='home-latest-top-image' src={item.image} alt="not found"/> 
                        </div>
                        <div className='latest-desp-parent'>
                          <h5>{item.heading.slice(0, 50)}...</h5>
                          <h4 className='latest-desp'>{item.footer}</h4>
                        </div>
                      </div>
                    </div>
                  </Link>    
              </div>
              )
            })}
            </div>
          </div>
        </div>
        <h1 className='news-head' style={{margin:"20px", color:"lightsalmon"}}>Stories</h1>
        <hr style={{width:"100%"}}/>
        <div className='home-latest'>
        {stories.map((item ,index)=>{
            // console.log(item);
            console.log(item.id)
            return (
              <div className='home-latest-parent' key={index}>
                  <Link className='link-home' to={`/detailshome/${item.id}`}>
                    <div className='home-latest-child'>                      
                      <div className='latest-desp-parent'>
                        {/* <img className='home-latest-image' src={item.image} alt="not found"/>  */}
                        <h2 style={{margin:"20px 0px"}}>{item.heading}</h2>
                        <p style={{margin:"20px 0px"}}>{item.description.slice(0, 230)} . . .</p>
                        <h4 className='latest-desp'>{item.footer}</h4>
                      </div>
                    </div>
                  </Link>
                  {/* <hr/> */}
              </div>
              )
            })} 
        </div>
        <Footer/>
    </>
  )
}

export default Home;