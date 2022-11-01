import React, { useEffect, useState } from 'react';
import {MdArrowForwardIos} from 'react-icons/md';
import I1 from '../assets/hot_sales.webp';
import I2 from '../assets/new_arrivals.webp';
import I3 from '../assets/whole_sale.jpg';
import {MdArrowBackIosNew} from 'react-icons/md';
import SlideShow from './SlideShow';
function TrendingSlideShow() {
let images = [I1,I2,I3];
const [currentSlide,setCurrentSlide] = useState(images[0]);
const handleAction = (action:string)=>{
    let slides = [...images];
    let index:number = 0;
    switch(action){
        case 'next':
         index = slides.indexOf(currentSlide);
         if(index + 1>(slides.length-1)) {
            setCurrentSlide(slides[0])
        }else{
             setCurrentSlide(slides[index+1]);
        }
        break;
        case 'previous':
        index = slides.indexOf(currentSlide);
         if(index - 1< 0) {
            setCurrentSlide(slides[slides.length-1])
         }else{
            setCurrentSlide(slides[index-1]);
         }
        break;
        default:
         setCurrentSlide(slides[index]);
    }
}
useEffect(()=>{
  let interval = setInterval(()=>{
 handleAction('next');
    },12000)
    return ()=>{
    clearInterval(interval);
    }
},[currentSlide])
return ( 
        <div className='slide border h-[52vh]  z-index relative'>
            <SlideShow images={images} currentSlide={currentSlide}/>
            <MdArrowForwardIos  onClick={() => handleAction('next')} className='absolute top-[45%] hover:flex peer-hover:flex left-[97%] hidden text-white bg-opacity-40 h-12 w-8  bg-black'/>
            <MdArrowBackIosNew  onClick={() => handleAction('previous')} className='absolute top-[45%] hover:flex peer-hover:flex hidden text-white bg-opacity-40 h-12 w-8 bg-black' />
        </div>
     );
}

export default TrendingSlideShow;