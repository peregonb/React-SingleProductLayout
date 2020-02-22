import React from 'react';

export const HeaderMenuItem = ({onClick, dataHref}) => {
    return (
        <a onClick={onClick} data-href={"#" + dataHref} className="first-section-li">{dataHref}</a>
    );
};
