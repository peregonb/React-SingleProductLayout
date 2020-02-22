import React from 'react';
import {HeaderMenuItem} from "./HeaderMenuItem";
import {anchorClick} from "../../../utils/doScrolling";

export const HeaderMenu = () => {

    return (
        <div className="first-section-center">
            <HeaderMenuItem onClick={e => anchorClick(e)} dataHref={"shop"}/>
            <HeaderMenuItem onClick={e => anchorClick(e)} dataHref={"about"}/>
            <HeaderMenuItem onClick={e => anchorClick(e)} dataHref={"faq"}/>
        </div>
    );
};
