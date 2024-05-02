import React from 'react';

import './item.css'; 

const Item = ({ image, title, description, index }) => {
  const isEven = index % 2 === 0;

  return (
    <div className={`ProjectContainer ${isEven ? 'even' : 'odd'}`}>
      <div className="ProjectImageWrapper">
        <img className="ProjectImage" src={image} alt={title} />
      </div>
      <div className="ProjectContent">
        <h3 className="ProjectTitle">{title}</h3>
        <p className="ProjectDescription">{description}</p>
        
      </div>
    </div>
  );
};

export default Item;
