import React from "react";
import {Slide} from './Slide'
import {getDotaTeams} from '../services'
import "./Slider.scss";
import { Navigation } from "./Navigation";
import { useState } from "react";
import { useEffect } from "react";


export const Slider = () => {
 
const [slides,setSlides]=useState([])

useEffect(()=>{
  getDotaTeams().then(res=>{
    
    const topFifteen = res.data.slice(0,16)
    setSlides(topFifteen)
  })
},[])

  const initialState = {
    slideIndex: 0,
  };

  const slidesReducer = (state, event) => {
    if (event.type === "PREV") {
      return {
        ...state,
        slideIndex: (state.slideIndex + 1) % slides.length,
      };
    }
    if (event.type === "NEXT") {
      return {
        ...state,
        slideIndex:
          state.slideIndex === 0 ? slides.length - 1 : state.slideIndex - 1,
      };
    }
  };


  const [state, dispatch] = React.useReducer(slidesReducer, initialState);

  return (<div>
      
    <div className='slideWrap'>
    <div className="slides">
      <button className='prev' onClick={() => dispatch({ type: "PREV" })} >‹</button>

      
      { 
      [...slides, ...slides, ...slides].map((slide, i) => {
        
        let offset = slides.length + (state.slideIndex - i);
        return <Slide slide={slide} offset={offset} key={i} />;
      })
      }
      <button className='next' onClick={() => dispatch({ type: "NEXT" })}>›</button>
    </div>
    </div>
    </div>
  );
};

