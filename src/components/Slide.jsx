import React from "react";
import { useTilt } from "../utilities/useTilt";
import {Link } from 'react-router-dom'
import ErrorImage from "./Team/ErrorImage/ErrorImage.jpg";

export function Slide({ slide, offset }) {

  
  
  const team = slide.team_id
  const active = offset === 0 ? true : null;
  const ref = useTilt(active);
  return (
    <div
      ref={ref}
      className="slide"
      data-active={active}
      style={{
        "--offset": offset,
        "--dir": offset === 0 ? 0 : offset > 0 ? 1 : -1,
      }}
    > 
      <div
        className="slideBackground"
        style={{
          backgroundImage: `url('${slide.logo_url}')`,
        }}
      />
      <Link to={`/team/${team}`}><div
        className="slideContent"
        style={{
          backgroundImage: `url('${slide.logo_url ? slide.logo_url : ErrorImage}')`,
        }}
      >
        <div className="slideContentInner">
          <h2 className="slideSubtitle">{slide.name}</h2>
        </div>
        
      </div> </Link>
    </div>
  );
}
