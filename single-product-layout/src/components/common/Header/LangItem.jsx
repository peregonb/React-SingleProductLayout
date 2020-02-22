import React from 'react';

export const LangItem = ({name, imgSrc, changeCurrency}) => {

    return (
        <div className="first-section-langItem" onClick={() => changeCurrency(name, imgSrc)}>
            <div className="first-section-langText">{name}</div>
            <img src={imgSrc} alt=""
                 className="first-section-langImg"/>
        </div>
    );
};
