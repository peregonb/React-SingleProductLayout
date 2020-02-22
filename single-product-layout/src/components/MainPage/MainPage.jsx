import React, {useState} from 'react';
import {PreHeader} from "../common/PreHeader";
import {FirstSection} from "./FirstSection";
import {Tiles} from "./Tiles";
import {Footer} from "../common/Footer";
import {Guarantee} from "../common/Guarantee/Guarantee";
import {Faq} from "./Faq/Faq";

export const MainPage = () => {
    let [headerColor, {}] = useState("");

    return (
        <div className="mainPage">
            <PreHeader/>
            <FirstSection headerColor={headerColor}/>
            <Tiles/>
            <section className="fourth-section" id="shop">
                <div className="fourth-section-wrap wrap">
                    <div className="fourth-section-left">
                        <div className="fourth-section-mobile">
                            <div className="fourth-section-headline">
                                Nullam sed faucibus
                            </div>
                            <div className="fourth-section-starwrap">
                                <div className="fourth-section-starblock">
                                    <div className="fourth-section-starempty"/>
                                    <div className="fourth-section-starfull"/>
                                </div>
                                <div className="fourth-section-startext" data-value="4">
                                    (4.0 - 103 reviews)
                                </div>
                            </div>
                        </div>

                        <div className="fourth-section-slider">
                            <div className="fourth-section-item"
                                // style="background-image: url('img/empty.jpg')"
                                // data-src="url('img/empty.jpg')"
                            />

                            <div className="fourth-section-item"
                                // style="background-image: url('img/empty.jpg')"
                                // data-src="url('img/empty.jpg')"
                            />

                            <div className="fourth-section-item"
                                // style="background-image: url('img/empty.jpg')"
                                // data-src="url('img/empty.jpg')"
                            />

                            <div className="fourth-section-item"
                                // style="background-image: url('img/empty.jpg')"
                                // data-src="url('img/empty.jpg')"
                            />

                            <div className="fourth-section-item"
                                // style="background-image: url('img/empty.jpg')"
                                // data-src="url('img/empty.jpg')"
                            />

                        </div>
                    </div>
                    <div className="fourth-section-right">
                        <div className="fourth-section-headline">
                            Nullam sed faucibus
                        </div>
                        <div className="fourth-section-starwrap">
                            <div className="fourth-section-starblock">
                                <div className="fourth-section-starempty"></div>
                                <div className="fourth-section-starfull"></div>
                            </div>
                            <div className="fourth-section-startext" data-value="4">
                                3 Review(s)
                            </div>
                        </div>
                        <div className="fourth-section-priceblock">
                            <div className="fourth-section-price">$499.00</div>
                            <div className="fourth-section-oldprice">$599.00</div>
                        </div>

                        <div className="fourth-section-quantitywrap">
                            <div className="fourth-section-quantitywrapper">
                                <div className="fourth-section-quantitytext">QTY</div>
                                <div className="fourth-section-quantityblock">
                                    <input required readOnly type="text" className="fourth-section-input" value="1"/>

                                    <div className="fourth-section-rightWrap">
                                        <div className="fourth-section-plus"/>
                                        <div className="fourth-section-minus"/>
                                    </div>

                                </div>
                            </div>
                            <div className="fourth-section-btn btn-black">
                                ADD TO CART
                            </div>
                        </div>
                        <div className="fourth-section-cardwrap">
                            <div className="fourth-section-cardtext">Guaranteed safe checkout</div>
                            <div className="fourth-section-content">
                                <img src="img/card1.png" alt="" className="fourth-section-card"/>
                                <img src="img/card2.png" alt="" className="fourth-section-card"/>
                                <img src="img/card3.png" alt="" className="fourth-section-card"/>
                                <img src="img/card4.png" alt="" className="fourth-section-card"/>
                                <img src="img/card5.png" alt="" className="fourth-section-card"/>
                            </div>
                        </div>
                        <div className="fourth-section-notify">
                            <strong>8 632</strong> claimed! Only 120 items left in stock
                        </div>

                        <div className="fourth-section-scalewrap">
                            <div className="fourth-section-scale" data-width="80"></div>
                        </div>

                        <div className="fourth-section-timeleft">
                            Hurry Up! Sales Ends in
                        </div>

                        <div className="fourth-section-timerwrap" data-days-left="1">
                            <div className="fourth-section-timerel">
                                <div className="fourth-section-timetile" id="days">00</div>
                                <div className="fourth-section-timetext">days</div>
                            </div>
                            <div className="fourth-section-timerel">
                                <div className="fourth-section-timetile" id="hours">00</div>
                                <div className="fourth-section-timetext">HRS</div>
                            </div>
                            <div className="fourth-section-timerel">
                                <div className="fourth-section-timetile" id="minutes">00</div>
                                <div className="fourth-section-timetext">MINs</div>
                            </div>
                            <div className="fourth-section-timerel">
                                <div className="fourth-section-timetile" id="seconds">00</div>
                                <div className="fourth-section-timetext">SECS</div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            <section className="fifth-section">
                <div className="fifth-section-wrap wrap">
                    <div className="fifth-section-item">
                        <img src="img/svg/shipped.svg" alt="" className="fifth-section-img"/>
                        <div className="fifth-section-headline">Lorem ipsum dolor</div>
                        <div className="fifth-section-text">A merino sheep’s wool fibers clock in at 20% the diameter of
                            human hair, meaning they’re sporting one superfine coat. We source 17.5 micron superfine New
                            Zealand Merino wool, which we developed into our very own material with a premium Italian
                            mill.
                        </div>
                    </div>
                    <div className="fifth-section-item">
                        <img src="img/svg/award.svg" alt="" className="fifth-section-img"/>
                        <div className="fifth-section-headline">Lorem ipsum dolor</div>
                        <div className="fifth-section-text">A merino sheep’s wool fibers clock in at 20% the diameter of
                            human hair, meaning they’re sporting one superfine coat. We source 17.5 micron superfine New
                            Zealand Merino wool, which we developed into our very own material with a premium Italian
                            mill.
                        </div>
                    </div>
                    <div className="fifth-section-item">
                        <img src="img/svg/call.svg" alt="" className="fifth-section-img"/>
                        <div className="fifth-section-headline">Lorem ipsum dolor</div>
                        <div className="fifth-section-text">A merino sheep’s wool fibers clock in at 20% the diameter of
                            human hair, meaning they’re sporting one superfine coat. We source 17.5 micron superfine New
                            Zealand Merino wool, which we developed into our very own material with a premium Italian
                            mill.
                        </div>
                    </div>
                </div>
            </section>
            <section className="sixth-section" id="reviews">
                <div className="sixth-section-wrap wrap">
                    <div className="sixth-section-headline">Customer <span className="second-color">Reviews</span>.
                    </div>
                </div>
            </section>
            <section className="seventh-section" id="about">
                <div className="seventh-section-wrap wrap">
                    <div className="seventh-section-headline"><span className="second-color">About </span>Us<span
                        className="second-color">.</span></div>
                    <div className="seventh-section-text">
                        We are a team of professionals in the wood processing and the creation of wooden furniture
                        of the highest className. Cras nunc elit, suscipit in mauris eget, sodales lacinia felis. Nam
                        non
                        lectus vitae sapien feugiat convallis et sit amet erat. Duis augue arcu, condimentum sit amet
                        ligula
                        ac ex. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sollicitudin commodo
                        magna, ac
                        tincidunt dolor porttitor nec. Fusce viverra ligula vel viverra faucibus. Cras nunc elit,
                        suscipit
                        in mauris eget,
                        sodales lacinia felis.
                    </div>
                </div>
            </section>
            <Faq/>
            <Guarantee/>
            <Footer/>
        </div>
    );
};
