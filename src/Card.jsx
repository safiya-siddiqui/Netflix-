import React from 'react';

function Card(props){
    return (
     
  <div className="cards">
      <div className="card">
      
        <img src={props.imgsrc} alt="my pic" className='card_image' />
  
        <div className="card_info">
          <span className='card_catogery'>{props.tittle}</span>
          <h3 className="card_tittle">{props.sname}</h3>
          
           
         <a href={props.link}>
          
         <button>WATCH NOW</button>
         </a>
         
  
        </div>
      </div>
    </div>
    );
  }
  export default Card;