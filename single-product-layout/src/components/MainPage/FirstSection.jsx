import React from 'react';
import {Header} from "../common/Header/Header";
import {anchorClick} from "../../utils/doScrolling";
import mouse from "../../assets/img/svg/mouse.svg";
// import sample from "../../assets/img/sample.jpg"


export const FirstSection = (props) => {


    return (
        <section className="first-section"
            // style={{backgroundImage: `url(${sample})`}}
        >
            <div className="first-section-wrap wrap">
                <Header headerColor={props.headerColor}/>
                <div className="first-section-content">
                    <div className="first-section-excerpt">Duis vehicula maximus libero at vulputate.</div>
                    <div className="first-section-headline">
                        Lorem <span className="second-color">ipsum dolor </span>
                        sit amet<span className="second-color">.</span>
                    </div>
                    <div onClick={e => anchorClick(e)} className="first-section-btn btn-white" data-href="#shop">SHOP
                        NOW
                    </div>
                    <div onClick={e => anchorClick(e)} className="first-section-scroll" data-href="#tiles">
                        <img onClick={e => anchorClick(e)}
                             data-href="#tiles"
                             src={mouse} alt=""
                             className="first-section-scrollImg"/>
                        <div onClick={e => anchorClick(e)}
                             data-href="#tiles"
                             className="first-section-scrollText">scroll
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
