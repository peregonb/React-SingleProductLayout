import React, {useRef} from 'react';

export const FaqItem = ({name, answer}) => {


    //     $('.faq-top').on('click', function () {
//    $(this).closest($('.faq-item')).toggleClass('active');
//    $(this).closest($('.faq-item')).find($('.faq-bottom')).slideToggle(300);
//
//    $('.faq-top').not($(this)).closest($('.faq-item.active')).find($('.faq-bottom')).slideToggle(300);
//    $('.faq-top').not($(this)).closest($('.faq-item.active')).toggleClass('active');
// });

    let clickHandler = (e) => {
        // console.log(e.closest)
    };

    return (
        <div className="faq-item">
            <div className="faq-top" onClick={(e) => clickHandler(e)}>
                <div className="faq-name">{name}</div>
                <div className="faq-plus"/>
            </div>
            <div className="faq-bottom">
                {answer}
            </div>
        </div>
    );
};
