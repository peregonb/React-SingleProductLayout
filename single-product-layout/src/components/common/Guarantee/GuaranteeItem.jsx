import React from 'react';

export const GuaranteeItem = ({image, text}) => (
    <div className="second-section-item">
        <img src={image} alt="" className="second-section-svg"/>
        <span>{text}</span>
    </div>
);
