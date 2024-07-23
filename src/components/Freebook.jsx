import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import list from "../../public/list.json"
import Cards from './Cards'; 

 function Freebook() {
  const filterData=list.filter((data)=>data.category==="Free");

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  
  return (
    <>
    <div className='max-w-screen-2xl container  mt-8 mx-auto md:px-20 px-4'>
      <div>
      <h1 className='mt-36 font-semibold  text-xl pb-2 '>Free Offered Courses</h1>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio, velit doloremque minima delectus aliquid magnam culpa natus corporis veniam nostrum commodi, earum facilis eveniet. Recusandae ratione id, unde neque nobis odit iure. Sit itaque, dolores voluptas incidunt ipsam saepe ex.</p>
      </div>
     
      <div>
    <Slider {...settings} className='-mx-12 h-25 w-26'>
        {filterData.map((item)=>(        
          <Cards item={item} key={item.id}/>
      ))}
         
      </Slider>
      </div>
    </div>
    
      </>
  );
}

export default Freebook;
