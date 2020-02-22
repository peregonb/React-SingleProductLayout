import React from 'react';
import {FaqItem} from "./FaqItem";

export const Faq = (props) => {

    return (
        <section className="faq" id="faq">
            <div className="faq-wrap wrap">
                <div className="faq-headline">Frequently Asked <span className="second-color">Questions</span>.
                </div>
                <div className="faq-content">
                    <div className="faq-left">
                        <FaqItem name={"Orders and Returns."}
                                 answer={"Vivamus nec turpis non diam congue dignissim vel id nulla. Phasellus venenatis, dui ut porta, libero lorem rhoncus justo, nec aliquet felis purus tincidunt augue. Aenean gravida non feugiat."}/>
                        <FaqItem name={"Lorem ipsum dolor sit amet?"}
                                 answer={"The gamepad is comparable with many shooting games, including Pubg, Fortnite, Critical Ops, Call of Duty Mobile, Hitman sniper, Rules of Survival, Knives Out, Survivor Royale, Creative Destruction, Garena Free Fire, Modern Combat 5 and many other games, which allow you to customize the location of the buttons."}/>
                        <FaqItem name={"Vivamus nec turpis non diam congue?"}
                                 answer={"Please use a USB cable to charge when the battery of the game controller is running low. It means normal charging status when the power indicator of the game controller is blinking; similarly, the indicators will be long bright once the battery has been charged completely, USB cable could be removed."}/>
                    </div>
                    <div className="faq-right">
                        <FaqItem name={"Lorem ipsum dolor sit amet?"}
                                 answer={"Orders are usually processed and shipped within 3 working days of purchase."}/>
                        <FaqItem name={"Vivamus nec turpis non diam congue?"}
                                 answer={"Shipping time varies as we do ship worldwide from different fulfillment centers based on your location. The average shipping time is about 7 to 20 working days."}/>
                        <FaqItem name={"Aenean pellentesque libero eget porta?"}
                                 answer={"You can pay with any credit card, as well as PayPal. You can choose a payment method on the checkout."}/>
                    </div>
                </div>
            </div>
        </section>
    );
};
