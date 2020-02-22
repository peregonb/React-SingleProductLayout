import React from 'react';
import logo from '../../assets/img/svg/logo.svg';
import afterFooter1 from '../../assets/img/afooter1.svg';
import afterFooter2 from '../../assets/img/afooter2.svg';
import afterFooter3 from '../../assets/img/afooter3.svg';
import afterFooter4 from '../../assets/img/afooter4.svg';
import afterFooter5 from '../../assets/img/afooter5.svg';
import {anchorClick} from "../../utils/doScrolling";


export const Footer = () => (
    <footer>
        <div className="footer">
            <div className="footer-wrap wrap">
                <img onClick={e => anchorClick(e)}
                     src={logo}
                     alt=""
                     className="footer-brand"
                     data-href="#index"/>
                <div className="footer-menu">
                    <a href="#" target="_blank" className="footer-li">Refund Policy </a>
                    <a href="#" target="_blank" className="footer-li">Privacy Policy</a>
                    <a href="#" target="_blank" className="footer-li">Terms of Service</a>
                    <a href="#" target="_blank" className="footer-li">Shipping</a>
                </div>
                <div className="footer-social">
                    <a href="#" target="_blank" className="footer-facebook icon-facebook-logo"/>
                    <a href="#" target="_blank" className="footer-instagram icon-instagram-logo"/>
                </div>
            </div>
        </div>
        <div className="afterfooter">
            <div className="afterfooter-wrap wrap">
                <a href="mailto:support@yourbrand.com" className="afterfooter-copyright">
                    support@yourbrand.com
                </a>
                <div className="afterfooter-imgwrap">
                    <img src={afterFooter1} alt="" className="afterfooter-img"/>
                    <img src={afterFooter2} alt="" className="afterfooter-img"/>
                    <img src={afterFooter3} alt="" className="afterfooter-img"/>
                    <img src={afterFooter4} alt="" className="afterfooter-img"/>
                    <img src={afterFooter5} alt="" className="afterfooter-img"/>
                </div>
                <div className="afterfooter-mercury">
                    Website by <a href="https://mercury.agency" target="_blank">Mercury</a>
                </div>
            </div>
        </div>
        <div className="copyright">
            <div className="copyright-wrap wrap">
                {new Date().getFullYear()}, YOURPROJECT. <br className="copyright-br"/> Any use or copying of a site is
                forbidden.
            </div>
        </div>
    </footer>
);
