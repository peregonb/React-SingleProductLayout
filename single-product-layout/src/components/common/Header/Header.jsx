import React, {useEffect, useRef, useState} from 'react';
import logo from '../../../assets/img/svg/logo.svg';
import unitedStates from '../../../assets/img/currencies/united-states.svg';
import europeanUnion from '../../../assets/img/currencies/european-union.svg';
import ukraine from '../../../assets/img/currencies/ukraine.svg';
import {LangItem} from "./LangItem";
import {useClickOutside} from "../../../utils/hooks/useClickOutside";
import {HeaderMenu} from "./HeaderMenu";

export const Header = ({headerColor}) => {
    const langMenu = useRef(null);
    let conditionCurrency =
        JSON.parse(localStorage.getItem('currency'))
        ? JSON.parse(localStorage.getItem('currency'))
        : {currencyValue: 'USD', imgSrc: unitedStates};

    const [currency, setCurrency] = useState(conditionCurrency);
    const [storedCurrency, setStoredCurrency] = useState(conditionCurrency);


    let addActive = (ref) => {
        ref.current.classList.add('active');
    };
    let removeActive = (ref) => {
        ref.current.classList.remove('active');
    };

    useClickOutside(langMenu, removeActive);

    let changeCurrency = (currencyValue, imgSrc) => {
        setCurrency({currencyValue, imgSrc});
        removeActive(langMenu);
    };

    useEffect(() => {
        localStorage.setItem('currency', JSON.stringify(currency));
        setStoredCurrency(JSON.parse(localStorage.getItem('currency')));
    }, [currency]);


    return (
        <div className={"first-section-header " + headerColor}>
            <div className="first-section-left">
                <a data-href="#index">
                    <img src={logo} alt="LOGO" className="first-section-logo"/>
                </a>
            </div>
            <HeaderMenu/>
            <div className="first-section-right">
                <div ref={langMenu} className="first-section-lang">
                    <div className="first-section-langItem choose" onClick={() => addActive(langMenu)}>
                        <div className="first-section-langText">{storedCurrency.currencyValue}</div>
                        <img src={storedCurrency.imgSrc} alt="" className="first-section-langImg"/>
                    </div>
                    <div className="first-section-langMenu">
                        <LangItem changeCurrency={changeCurrency} name="EUR" imgSrc={europeanUnion}/>
                        <LangItem changeCurrency={changeCurrency} name="UAH" imgSrc={ukraine}/>
                        <LangItem changeCurrency={changeCurrency} name="USD" imgSrc={unitedStates}/>
                    </div>
                </div>
                <div className="first-section-cart icon-bag">
                    <span>0</span>
                </div>
            </div>
        </div>
    );
};
