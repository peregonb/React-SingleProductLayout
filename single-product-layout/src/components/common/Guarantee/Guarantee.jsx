import React from 'react';
import guarantee1 from '../../../assets/img/svg/pre-footer1.svg'
import guarantee2 from '../../../assets/img/svg/pre-footer2.svg'
import guarantee3 from '../../../assets/img/svg/pre-footer3.svg'
import guarantee4 from '../../../assets/img/svg/pre-footer4.svg'
import {GuaranteeItem} from "./GuaranteeItem";

export const Guarantee = () => (
    <section className="second-section">
        <div className="second-section-wrap wrap">
            <GuaranteeItem image={guarantee1} text={"Satisfaction Guaranteed"}/>
            <GuaranteeItem image={guarantee2} text={"Worldwide shipping"}/>
            <GuaranteeItem image={guarantee3} text={"Returns Within 14 Days"}/>
            <GuaranteeItem image={guarantee4} text={"Safe & Secure Checkout"}/>

            {/*<GuaranteeItem image={guarantee5} text={"Придумать описание исходя из картинки"}/>*/}
            {/*<GuaranteeItem image={guarantee6} text={"Придумать описание исходя из картинки"}/>*/}
        </div>
    </section>
);
